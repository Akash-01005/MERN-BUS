import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    image:{
        type:String,
        default: "none"
    }
});


const userModel = mongoose.model("user",userSchema);

export default userModel