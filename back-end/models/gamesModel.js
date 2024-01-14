import mongoose from "mongoose";
const Schema = mongoose.Schema;

const gamesSchema = new Schema({
    gameTitle: {
        type: String,
        required: true,
        unique: true
    },
    gameDescription: {
        type: String,
        default: 'Inserte texto',
        required: true
    },
    gamePrice: {
        type: Number,
        required: true
    },
    gameImage: {
        type: String,
        required: true
    },
    gameDeveloper: {
        type: String
        
    },
    gamePegi: {
        type: Number
        
    },
    gameCategory: {
        type: String
        
    }
});

const Games = mongoose.model('Games', gamesSchema);
export default Games;