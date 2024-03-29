import express from "express";
import * as usersController from '../controllers/usersController.js';

const router = express.Router();

router.post("/users", usersController.registerUser);

export default router;