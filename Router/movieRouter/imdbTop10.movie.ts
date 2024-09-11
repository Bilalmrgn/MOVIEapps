import express from 'express';
import Movie from '../../db/movie.model.js';

const router = express.Router();
//en iyi 10 filmi sıralama
router.get('/top10',async (req,res) =>{
    const sort = Movie.find({}).limit(10).sort({imdb_score: -1});

})