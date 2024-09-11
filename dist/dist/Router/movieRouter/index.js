import express from 'express';
import createMovie from './createMovie.js';
import getAllMovie from './getAllMovie.js';
import updateMovie from './updateMovie.js';
import deleteMovie from './deleteMovie.js';
var router = express.Router();
//tüm rotaları ana router a ekleme
router.use(createMovie);
router.use(getAllMovie);
router.use(updateMovie);
router.use(deleteMovie);
export default router;
