import dotenv from "dotenv"
import OpenAI from "openai";
const express = require("express")
const cors=require("cors")
const{Configuration,OpenAIApi}=require("openai")


const config=new Configuration({
    apiKey:process.env.API_KEY
}); 
const openai=new OpenAIApi(config);

const app=express();
app.use(bodyParser.json())
app.use(cors());

app.post('/chat',async(req,res)=>{
    const {prompt}=req.body

    const completion=await openai.createCompletion({
        model :"text-davinci-003",
        max_tokens:512,
        temperature:0,
        pronpt:prompt,

    });
    res.send(completion.data.choices[0].text)
});
const PORT =process.env.PORT;
app.listen(PORT,()=>console.log(`server running on port :${PORT}`));