import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import users from '../models/auth.js'
import nodemailer from 'nodemailer'



export const signup = async(req,res)=>{

    const {name,email,password} = req.body;
    try{

        const existinguser =await users.findOne({email});

        if(existinguser){
            alert("user already registered with this email. plaese login")
        
            return res.status(404).json({message:"User Already Exist."})
        }
        const hashedPassword=await bcrypt.hash(password,12)
        const newUser=await users.create({name,email,password:hashedPassword})
        const token =jwt.sign({email:newUser.email, id:newUser._id},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.status(200).json({result:newUser,token})
       
    } catch(error){
    
        res.status(500).json("something went wrong...")

    }

}

export const login=async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        const existinguser =await users.findOne({email});
        if(!existinguser){
            alert("user does not exist with this email")
            return res.status(404).json({message:"User don't Exist."})
        }
        const isPasswordCrt=await bcrypt.compare(password,existinguser.password)
        if(!isPasswordCrt){
            alert('Wrong credentials!')
            return res.status(400).json({message:"Invalid Credentials"})
        }
        const token =jwt.sign({email:existinguser.email, id:existinguser._id},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.status(200).json({result:existinguser,token})

    }catch(error){
        res.status(404).json("something went wrong...")
    }
    
}
export const updateDate=async(req,res)=>{
    const{id:_id}=req.params;
    
    var limit=1;
    const user=await users.findOne({_id});
    if(user.currentPack==='silver'){
        limit=5
    }else if(user.currentPack==='gold'){
        limit=Infinity;
    }
    try {
       const data= await users.findByIdAndUpdate(_id,{$set:{packJoinedOn:new Date().toISOString().slice(0,10),limit:limit,limitUsed:0}},{new:true})
    //    console.log(data +"im updateDate")
        res.status(200).json(data)

        
    } catch (error) {
        res.status(400).json("error occuured")
    }
}
export const updatePack =async(req,res)=>{
    const{id:_id}=req.params;
    try {
     const data =   await users.findByIdAndUpdate({_id:_id},{$set:{packEndOn:'2050-01-01',limit:1,limitUsed:0,currentPack:"pack-0"}})
     //console.log(data)
        res.status(200).json(data)

        
    } catch (error) {
        res.status(400).json("error occuured")
    }


}
export const forgotPassword=async(req,res)=>{
    const{email}=req.body
    try {
        const user=await users.findOne({email:email});
        if(!user){
            return res.status(200).json(401)
        }
        const secret =process.env.JWT_SECRET+user.password;
        const token=jwt.sign({email:email,id:user._id},secret,{expiresIn:'5m'})
       // const link=`http://localhost:5000/user/resetPassword/${user._id}/${token}`
        const link=`http://stack-overflow-ecom.onrender.com/${user._id}/${token}`
        
        console.log(link)
        console.log(process.env.email,process.env.emailPassword)
        var transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:`${process.env.email}`,
                pass:`${process.env.emailPassword}`
            },
            
        });
       
        var mailOptions={
            from:`${process.env.email}`,
            to:`${email}`,
            subject:'Reset password link',
            text:`Your link for rest password is ${link} . clink on this to reset password.`
        }
        transporter.sendMail(mailOptions,function(err,info){
            if(err){
                console.log(err)
            }else{
                console.log("email sent:"+ info.response)
            }
        })
        return res.status(200).json(200)

        
        
    } catch (error) {
    res.status(402).json(402)
        
    }
}
export const resetPassword=async(req,res)=>{
    const  {id,token}=req.params;
    
    const user=await users.findOne({_id:id});
    if(!user){
        return res.status(400).json('user does not exist')
    }
    const secret=process.env.JWT_SECRET+user.password;
    try {
        const verify=jwt.verify(token,secret)
        
       res.render('changePassword',{email:verify.email});
        
    } catch (error) {
        res.status(400).json('something went wrong')
    }

}
export const updatePassword=async(req,res)=>{
    const  {id,token}=req.params;
    const {password,confirmPassword}=req.body
   
    if(password!==confirmPassword){
        return res.status(401).json('password & confirm password should be same')

    }
    const user=await users.findOne({_id:id});
    if(!user){
        return res.status(400).json('user does not exist')
    }
    const secret=process.env.JWT_SECRET+user.password;
    try {
        const verify=jwt.verify(token,secret)
      const hashPassword=await bcrypt.hash(password,12);
      await users.updateOne({_id:id},{ $set:{password:hashPassword}})
      res.status(200).json("password changed successfully")
        
    } catch (error) {
        res.status(400).json('something went wrong')
    }

}