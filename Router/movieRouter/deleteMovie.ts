import express from 'express';
import Movie from '../../db/movie.model.js';

const router = express.Router();
router.delete('/:movie_id',async (req,res) => {
    const deletes = req.params.movie_id;
    const deleteMovie = await Movie.findByIdAndDelete(deletes);
    if(!deleteMovie){
        return res.status(404).json({message: "Movie not found"});
    }
    res.status(200).json({message: "movie deleted"});
})
export default router;