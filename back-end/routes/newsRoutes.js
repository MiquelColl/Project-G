import express from "express";
import * as newsController from '../controllers/newsController.js';

const router = express.Router();

router.post("/news", newsController.insertNew);

export default router;