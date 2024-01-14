import express from "express";
import * as reviewsController from '../controllers/reviewsController.js';

const router = express.Router();

router.post('/reviews', reviewsController.newReview); 
router.get('/reviews', reviewsController.showAllReviews); 
router.put('/reviews/:title', reviewsController.updateReview); 
router.delete('/reviews/:title', reviewsController.deleteReview);


export default router;