import mongoose from "mongoose";
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surnames: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    address:{
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Users = mongoose.model('Users', usersSchema);
export default Users;