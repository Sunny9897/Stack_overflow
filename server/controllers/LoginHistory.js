import ip from 'ip'

 import UserAgent from 'user-agents'
import useragent from 'useragent'
 import os from 'os'
 import Histories from '../models/loginHistory.js'

 
 



export const getLoginHistory=async(req,res)=>{
    try {
        
    
    const userAgent= new UserAgent();
    
 const userAgentString=req.headers['user-agent'];
   const ua=useragent.parse(userAgentString);
   
    const Data={
        email:'sunnysharma10082@gmail.com',
        os:os.type(),
        device:userAgent.deviceCategory,
        browser:ua.family,
        ipAddress:ip.address(),
        loginOn:new Date(),
        

    }
    const historyData=new Histories(Data);
    console.log(historyData);
    historyData.save();

    
    res.status(200).json({device:userAgent.deviceCategory, os:os.platform(), osType: os.type(), browser:ua.family, date:new Date()})
    
} catch (error) {
    res.status(400).json('error occured ')
        
}

}
export const getIpAddress=async(req,res)=>{
    try {
        
    
    const IP= ip.address();
    console.log(IP)
    res.status(200).json({ address:IP})
} catch (error) {
       res.status(400).json("some error occured")
}

}