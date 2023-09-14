import mongoose from 'mongoose'
const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    about:{type:String},
    tags:{type:[String]},
    joinedOn:{type:Date,default:Date.now},
    currentPack:{type:String,default:"pack-0"},
    limit:{type:Number,default:1},
    limitUsed:{type :Number,default:0},
    packJoinedOn:{type:String,default:new Date().toISOString().slice(0,10)},
    packEndOn:{type:String,default:'2050-01-01'}
})
export default mongoose.model("User",userSchema)