import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv"
import bodyParser from 'body-parser'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import paymentRoutes from './routes/Payment.js'
import historyRoutes from './routes/LoginHistory.js'



const app=express();
dotenv.config();
app.use(express.json({limit :"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());
app.set('view engine','ejs');



app.get('/',(req,res)=>{

    res.send("this is a stackoverflow-clone api")
})
app.use('/user',userRoutes)
app.use('/limit',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)
app.use('/Product/payment-success',paymentRoutes)
app.use('/data',historyRoutes)
const PORT  = process.env.PORT|| 5000
const DATABASE_URL=process.env.CONNECTION_URL
mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)}))
.catch((err)=>console.log(err.message))