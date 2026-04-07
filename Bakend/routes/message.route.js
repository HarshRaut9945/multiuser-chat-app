import express from "express";
import { sendMessage } from "../controller/message.controller";

const router = express.Router();

router.post("/send/:id",sendMessage)

export default router;