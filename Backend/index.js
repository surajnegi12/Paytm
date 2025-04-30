import express from "express";
import dotenv from 'dotenv';
import { router } from "./routes/index.js";
import cors from 'cors'
import mongoose from "mongoose";
dotenv.config();
const port=process.env.PORT;
const app=express();
app.use(express.json());
app.use(cors());

app.use("/api/v1",router);
mongoose.connect(process.env.MONGO_URL);
app.listen(port);