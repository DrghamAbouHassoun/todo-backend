import express, { Request, Response } from 'express';
import cors from 'cors';
import connectToDatabase from './config/connectToDatabase';
import mainRouter from './routers/router';

const app = express();

// Use Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectToDatabase();

// Routes
app.get("/", (req: Request, res: Response) => {
    return res.json({
        message: "Welcome to my API 2",
    })
})

app.use("/api", mainRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});