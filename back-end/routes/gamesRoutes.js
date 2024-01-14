import express from "express";
import * as gamesController from '../controllers/gamesController.js';

const router = express.Router();

router.post('/games', gamesController.newGame); 
router.get('/games', gamesController.showAllGames); 
router.delete('/games/:gameTitle', gamesController.deleteGame);
router.get('/games/search/:gameTitle', gamesController.searchGames);

export default router;