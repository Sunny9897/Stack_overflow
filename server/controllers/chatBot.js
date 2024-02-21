import OpenAI from "openai";
//import Configuration from 'openai'

export const chatBot=async(req,res)=>{
// const configuration=new Configuration({
//     organization:'org-I50xnVIZNemdhgrniUopa7lw',
//     apiKey:'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'
// });
//const openai=new OpenAIApi(configuration);
const openai=new OpenAI({
    apiKey:'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'
})
const{chats}=req.body;
//try {
    




const result=await openai.chat.completions.create({



    model:'gpt-3.5-turbo',
    messages:[
        {
            role:"system",
            content:"you are gpt,you can write mails",
        
        },
        ...chats
    ]
});
res.json({
    output:result.data,
})
// } catch (error) {
//     res.status(400).json('error occured')
    
// }

}