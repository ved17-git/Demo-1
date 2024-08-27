import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import router from './Routes/userRoute.js'

const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:process.env.React_App_Origin,
    credentials:true
}))


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Database Connected");
    app.listen(process.env.PORT,()=>{
        console.log("listning on 3000");  
    })
})
.catch(()=>{
    console.log("Connection Error");
})

app.use('/',router)