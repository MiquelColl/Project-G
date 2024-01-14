import mongoose from "mongoose";
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    newsTitle: {
        type: String,
        required: true,
        unique: true
    },
    newsImage:{
        type: String,
        required: true
    },
    newsDate:{
        type: Date,
        required: true
    },
    newsDescription: {
        type: String,
        required: true
    }

});

const News = mongoose.model('News', newsSchema);
export default News;