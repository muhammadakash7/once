import express from "express";
import cors from "cors";
import mongoose from 'mongoose'
import { userRouter } from "./routes/userroute.js";
import { recipesRouter } from "./routes/recipesroute.js";
const app = express();
app.use(express.json()); 
app.use(cors());
app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);
mongoose.connect("mongodb+srv://akash:akash@cluster0.z30xuhn.mongodb.net/recipes")
app.listen(5000,()=> console.log("server started "));