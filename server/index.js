import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { userRoutes } from "./routes/user.js"

dotenv.configDotenv()
const app = express()

app.use(cors({
    origin:["http://localhost:5173"],
    credentials: true
}))
app.use(express.json())
app.use(userRoutes)


mongoose.connect("mongodb://localhost:27017/Bus")
.then(()=>{
    console.log("MongoDB is connected")
})
.catch(err=>console.log(err))

app.listen(3000,()=>{
    console.log("port is listening")
})