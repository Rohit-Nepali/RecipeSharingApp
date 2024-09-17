import { createServer } from 'http';
import { Router } from 'express';
import connectDB from './config/db.js';
import express from 'express';
import routes from './routes/recipe.routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';

const Port = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to database
connectDB().
    then(() => {
        app.listen(Port, () => {
            console.log(`Server running on ${Port}`);
        })
    })
    .catch(() => {
        console.log("Connection failed");
    })

// Define routes
app.use('/', routes);

export default app;






