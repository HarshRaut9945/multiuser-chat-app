import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ FIX: Add CORS
app.use(cors());
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URL;

// Routes
app.get("/", (req, res) => {
  res.send("Hello Bhai ✅");
});

app.use("/user", userRoute);

// ✅ Connect DB then start server
mongoose
  .connect(URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`🚀 Server is Running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("❌ MongoDB connection error:", error);
  });