import express from "express"
import bcrypt from "bcrypt"
import userModel from "../models/user.js"

const routes = express.Router()

routes.post("/signup",async(req,res)=>{
    const {username,email,password} = req.body;
    const hashPassword = await bcrypt.hash(password,10);
    const check = await userModel.findOne({email:email})
    console.log(check)
    if(check === null){
        const newData = {username:username,email:email,password:hashPassword};
        await userModel.create(newData)
        return res.json({status:true,message:"user sucessfully registered"})
    }
    return res.json({status:false,message:"user already exists"})
})

export {routes as userRoutes}