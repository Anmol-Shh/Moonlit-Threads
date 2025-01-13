import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import imageRoutes from './routes/imageRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js'; 
import emailRoutes from './routes/emailRoutes.js';



dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/', authRoutes);
app.use('/', imageRoutes);
app.use('/', cartRoutes);
app.use('/', productRoutes); 
app.use('/', emailRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    dbName: 'storeDB'
}).then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
