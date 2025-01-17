import express from 'express';
import { get } from 'mongoose';
import { getTrendingMovie } from '../controllers/movie.controller.js';

const router = express.Router();

router.get("/trending", getTrendingMovie);
export default router;