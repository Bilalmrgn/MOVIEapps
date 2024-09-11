import express from 'express';
import User from '../db/users.model.js'
import crypto, { hash } from 'crypto';
import bcrypt from 'bcrypt';

const router = express.Router();

router.get('/',(req,res,next) => {

})

//user kayıt
router.post('/', async (req,res,next) => {
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).json({ message: "Missing data" });
    }
    try {
        const saltRounds = 10;//Yüksek sayıda salt round, hash'in daha güvenli olmasını sağlar, ancak bu işlem daha fazla zaman alır.
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({
            username: username,
            password: hashedPassword
        })
        //kullanıcı varsa
        const isUserExists = await User.findOne({username});
        if(isUserExists){
            return res.status(401).json({ message: "User Already Exists" });
        }
        const savedUser = await newUser.save();
        res.status(201).json({
            message: 'kullanıcı kaydedildi',
            user: savedUser 
        })
    } catch (error) {
        
    }
    

    
})

export default router;
