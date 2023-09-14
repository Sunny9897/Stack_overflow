import mongoose from 'mongoose'
const historySchema=mongoose.Schema({

email:{type:String,required:true},
loginOn:{type:String,default:null},
os:{type:String,default:null},
device:{type:String,default:null},
browser:{type:String,default:null},
ipAddress:{type:String,default:null},
loginAt :{type:String,default:null},





})
export default mongoose.model("History",historySchema)