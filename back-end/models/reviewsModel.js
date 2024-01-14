import mongoose from "mongoose";
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    reviewTitle: {
        type: String,
        required: true,
        unique: true
    },
    reviewImage:{
        type: String,
        required: true,
    },
    reviewDescription: {
        type: String,
        required: true
    }

});

const Reviews = mongoose.model('Reviews', reviewsSchema);
export default Reviews;