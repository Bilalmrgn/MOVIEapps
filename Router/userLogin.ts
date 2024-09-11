import express from "express";
import User from '../db/users.model.js'
import crypto, { hash } from 'crypto';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import apiSecretKey from "../config.js";
const router = express.Router();

//user login
router.post('/login',async (req,res) => {
    const {username,password} = req.body;
    //kullanıcıyı bul
    const user = await User.findOne({username});
    if(!user){
        res.json({
            username,
            message: 'user is not found'
        });
    }
    //parolayı doğrula
    const validPassword = await bcrypt.compare(password, user?.password);
    if(!validPassword){
        return res.send('Password is wrong');
    }
    //token oluşturma
    const payload = {
        username: username
    }
    const token = jwt.sign(payload,apiSecretKey.api_secret_key,{expiresIn: '1h'});
    res.json({
        status: true,
        token: token
    })
});

export default router;