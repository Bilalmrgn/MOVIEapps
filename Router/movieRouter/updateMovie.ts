import express from 'express';
import Movie from '../../db/movie.model.js';

const router = express.Router();
router.put('/:movie_id', async (req,res) => {
    const movieId = req.params.movie_id;//url deki movie_id parametresindeki id yi alır
    const updatemovie = await Movie.findByIdAndUpdate(movieId,req.body,{new: true});//yazdığımız movie id ye göre id yi bulur ve günceller
    try {
        res.status(200).json({
            message: 'film güncellendi',
            movie: updatemovie
        });
    } catch (error) {
        res.status(404).json({message: 'güncellenmedi.'})
    }
})
export default router;