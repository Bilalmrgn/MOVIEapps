import express from 'express';
import Movie from '../../db/movie.model.js';
import { error } from 'console';

//get all movies
const router = express.Router();
router.get('/movie', async (req,res) => {
    try {
        //filmleri yönetmenleriyle birlikte getir
        const movie = await Movie.aggregate([
            {
                $lookup: {
                    from: 'directors',
                    localField: 'director_id',
                    foreignField: '_id',
                    as: 'director'
                }
            },
            {
                $unwind: '$director'
            }
        ]);
        res.status(200).json(movie);
        console.log('başarili');
    } catch (error:any) {
        console.log('hata');
        res.status(500).json({message: error.message});
    }
});

//get a user by ID
router.get('/:movie_id',async (req,res) => {
    const movie = await Movie.findById(req.params.movie_id);
    if(!movie){
        res.json({message: 'belirli id ye sahip film getirilirken hata'})
    }
    res.json(movie);
})

export default router;