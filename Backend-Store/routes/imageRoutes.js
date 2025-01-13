
import express from 'express';
import { fetchImages } from '../controllers/imageController.js';

const router = express.Router();

router.get('/images', fetchImages);

export default router;
