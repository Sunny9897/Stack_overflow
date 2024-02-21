import ip from 'ip'

 import UserAgent from 'user-agents'
import useragent from 'useragent'
 import os from 'os'
 import Histories from '../models/loginHistory.js'

 
 



export const getLoginHistory=async(req,res)=>{
    const {email,lat,long}=req.body;
    try {
        
    
    const userAgent= new UserAgent();
    
 const userAgentString=req.headers['user-agent'];
   const ua=useragent.parse(userAgentString);
   
    const Data={
        email:email,
        os:os.type(),
        device:userAgent.deviceCategory,
        browser:ua.family,
        ipAddress:ip.address(),
        loginOn:new Date(),
        lat:lat,
        long:long,
        

    }
    const historyData=new Histories(Data);
    
    historyData.save();

    
    res.status(200).json(historyData)
    
} catch (error) {
    res.status(400).json('error occured ')
        
}

}
export const getHistory=async(req,res)=>{
    const {email}=req.params;
  
    try {
        const loginHistory=await Histories.find({email:email});
        // const  allHistory=[]
        // loginHistory.forEach(history => {
        //     allHistory.push({email: history.email, loginOn:history.loginOn,os: history.os,device:history.device,browser:history.browser,ipAddress:history.ipAddress,lat:history.lat,long:history.long})
            
        // });
       
    res.status(200).json(loginHistory);
        
    
    
} catch (error) {
       res.status(400).json("some error occured")
}

}