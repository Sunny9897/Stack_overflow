import mongoose from "mongoose";
const paymentSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    paymentFor:{type:String,required:true},
    txnDate:{type:String,default:new Date().toISOString().slice(0,10)},
    txnId:{type:String,required:true}

})
export default mongoose.model('Payment',paymentSchema)