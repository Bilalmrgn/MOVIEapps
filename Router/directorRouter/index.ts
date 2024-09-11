import express from 'express';
import createDirector from './createDirector.js';
import updateDirector from './updateDirector.js';
import deleteDirector from './deleteDirector.js';
import getDirector from './getAll_Director.js';

const router = express.Router();
router.use(createDirector);
router.use(updateDirector);
router.use(deleteDirector);
router.use(getDirector);

export default router;