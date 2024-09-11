import express from 'express';
import Director from '../../db/director.model.js';

const router = express.Router();

router.delete('/:director_id',async (req,res)=>{
    const directorID = req.params.director_id;
    const director = await Director.findByIdAndDelete(directorID);
    if(!director){
        return res.status(404).json({message: "Director not found"});
    }
    res.status(200).json({message: "Director deleted"});
})
export default router;
