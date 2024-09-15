import express from "express"
import bcrypt from "bcrypt"
import userModel from "../models/user.js"
import fs from "fs"
import multer from "multer"
import path from "path"

const routes = express.Router()

const storage =  multer.diskStorage({
    destination:function(req,file,cb){
     cb(null,"../client/images")
    },
    filename:function(req,file,cb){
      const filename = `${req.body.username}.${path.extname(file.originalname)}`;
      cb(null,filename)
    }
 })

 const upload = multer({storage:storage})

routes.post("/signup",upload.single('image'),async(req,res)=>{
    const {username,email,password} = req.body;

    const hashPassword = await bcrypt.hash(password,10);
    const check = await userModel.findOne({email:email})
    console.log(check)
    if(check === null){
        if(!fs.existsSync('../client/images')){
           fs.mkdirSync("../client/images")
        }
        const newData = {username:username,email:email,password:hashPassword,image:req.file.path};
        await userModel.create(newData);
        return res.json({status:true,message:"user sucessfully registered"})
    }
    return res.json({status:false,message:"user already exists"})
})

export {routes as userRoutes}