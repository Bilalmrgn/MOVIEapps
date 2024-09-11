import express from 'express';
import createMovie from './movieRouter/createMovie.js';
import getAllMovie from './movieRouter/getAllMovie.js';
var router = express.Router();
//tüm rotaları ana router a ekleme
router.use(createMovie);
router.use(getAllMovie);
