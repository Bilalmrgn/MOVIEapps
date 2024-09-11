import express from 'express';
import Movie from '../../db/movie.model.js';
import { count } from 'console';
const router = express.Router();

//create movie
router.post('/movie', async (req,res,next) => {
    //yeni film ekleme
    const {title,category,country, year, imdb_score} = req.body;

    if(!title || !category || !country || !year || !imdb_score){
        return res.status(400).json({message: 'Tüm film bilgilerini doldur'});
    }
    //create movie
    try {
        const newMovie = new Movie({
            title: title,
            category: category,
            country: country,
            year: year,
            imdb_score: imdb_score
        });
        //save to database
        const savedMovie = await newMovie.save();
        //başarılı mesajı döndür
        res.status(201).json({
            message: 'Yeni film eklendi',
            movie: savedMovie
        });
    } catch (error:any) {
        // Hata durumunda yanıt döndür
        res.status(500).json({
            message: 'Veritabanına kaydedilirken bir hata oluştu',
            error: error.message
        });
    }

})

export default router;