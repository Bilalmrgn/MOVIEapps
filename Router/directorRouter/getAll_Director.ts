import express from 'express';
import Director from '../../db/director.model.js';

const router = express.Router();

router.get('/director',async (req,res) => {
    const director = await Director.find();
    try {
        res.status(200).json(director);
    } catch (error:any) {
        console.log('hata(getAllDirector.ts)');
        res.status(500).json({message: error.message});
    }
})
export default router;
