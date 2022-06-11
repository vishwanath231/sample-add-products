import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'


dotenv.config();

connectDB();

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


app.use('/api/products', productRoutes);

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`server running ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.bgYellow.black.underline)
);