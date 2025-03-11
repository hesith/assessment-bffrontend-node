import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import baseRouter from './routes/base.routing';
import errorMiddleware from './middlewares/error.middleware';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', baseRouter);
app.use(errorMiddleware); 

app.listen(port, async() => {
    console.log(`Server is running on port ${port}`);  
});

