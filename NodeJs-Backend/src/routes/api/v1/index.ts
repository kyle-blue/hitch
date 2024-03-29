import { Router } from "express";
import mongoose from "mongoose";
import flagRouter from "./flags";
import groupRouter from "./groups";
const router = Router();

const MONGO_IP = "mongodb"; //docker-compose adds service link as ip in hosts
const MONGO_PORT = "29393";
const DB_URL = `mongodb://${MONGO_IP}:${MONGO_PORT}`;
mongoose.connect(`${DB_URL}/hitch`, { useNewUrlParser: true, useUnifiedTopology: true });

router.use("/flags", flagRouter);
router.use("/groups", groupRouter);

export default router;

