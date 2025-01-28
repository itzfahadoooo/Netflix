import express from 'express';
import { getSearchHistory, removeitemfromsearchHistory, searchMovie, searchPerson, searchTv } from '../controllers/search.controller.js';
import { get } from 'mongoose';

const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTv);

router.get("/history", getSearchHistory);

router.delete("/history/:id", removeitemfromsearchHistory);

export default router;