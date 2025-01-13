import express from 'express';
import { saveProducts, getProducts } from '../controllers/productController.js';

const router = express.Router();

router.post('/save-products', saveProducts); // Save products with AWS S3 images
router.get('/products', getProducts); // Fetch products for the frontend

export default router;
