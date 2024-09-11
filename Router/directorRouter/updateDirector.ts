import express from 'express';
import Director from '../../db/director.model.js';

const router = express.Router();

router.put('/:director_id',async (req,res) => {
    const directorId = req.params.director_id;
    const updateDirector = await Director.findByIdAndUpdate(directorId,req.body,{new: true});
    try {
        res.status(200).json({
            message: 'director güncellendi',
            director: updateDirector
        });
    } catch (error) {
        res.status(404).json({message: 'güncellenmedi.(updateDirector.ts))'})
    }
})
export default router;