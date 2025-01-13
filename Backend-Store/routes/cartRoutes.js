import express from 'express';
import { addToCart, getCart, removeFromCart } from '../controllers/cartControllers.js';

const router = express.Router();

router.post('/', addToCart);            // Add to cart
router.get('/:userId', getCart);        // Fetch cart by user ID
router.delete('/', removeFromCart);     // Remove item from cart

export default router;
