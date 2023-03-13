import express from 'express';

const placesControllers = require('../controllers/places-controllers.cjs');

const router = express.Router();

router.get('/:pid', getPlaceById);

router.get('/user/:uid', getPlaceByUserId);

export default router;