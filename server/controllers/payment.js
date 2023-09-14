
import  Payments from "../models/payments.js";
import User from '../models/auth.js'
import mongoose from 'mongoose'
import auth from "../models/auth.js";
import Razorpay from 'razorpay'

export const instance= new Razorpay({
    key_id:"rzp_test_qy2Ngr98mqLPUr",
    key_secret:"NldN3I5wANrjhp9g4vFnDMYi"

})


export const packPayment=async(req,res)=>{
    const {name,email,amount}=req.body;
    const options={
        amount:amount*100,
        currency:'INR',
    }
const order=await instance.orders.create(options)
console.log(order);
res.status(200).json('order created')









    // const{name,email,amount}=req.body;
    // var todatDate=new Date().toISOString().slice(0,10);
    // if(amount==="gold"){
    //     var limit=Infinity;
    // }else if(amount==='silver'){
    //     limit=5;
    // }
   
    // const existingId=await Payments.findOne({txnId:paymentId})
    // console.log(existingId)
    // if(existingId!==null){
    //     return res.status(404).json({message:"payment failed."})
    // }
    // if(amount===0){
    //     alert('something went wrong')
    //     return res.status(404).json({message:"payment failed."})
    // }
    // const Data={
    //     name:name,
    //     email:email,
    //     paymentFor:amount,
    //     txnId:paymentId,
    //     txnDate:todatDate
    // }
   

    // try {
    //    const paymentData= new Payments(Data);
    //    console.log(paymentData)
    //    await paymentData.save();
    //    const packData=await User.findOneAndUpdate({email:email},{$set:{currentPack:amount,limit:limit,packJoinedOn:new Date(),packEndOn:todatDate.setDate(todatDate.getDate()+30).toISOString().slice(0,10)}},{new:true})
    //    console.log(packData)
        
    //     res.status(200).json("successful!")
    // } catch (error) {
    //     res.status(404).json("something went wrong")
        
    // }
}

export const paymentVerify=async(req,res)=>{
    const {name,email,amount}=req.body;
    const options={
        amount:amount*100,
        currency:'INR',
    }
const order=await instance.orders.create(options)
console.log(order);
res.status(200).json('order created')
}