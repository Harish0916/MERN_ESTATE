import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

const app = express();
const PORT = 3000;
dotenv.config();

mongoose.connect(process.env.MONGO_DB)
    .then(()=>console.log("Connected to MongoDB"))
    .catch((err)=>console.log(err))

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})