import mongoose from "mongoose";

const QuestionSchema=mongoose.Schema({
    questionTittle:{type:String,required:"Question must have a title"},
    questionBody:{type:String,required:"Question must have a body"},
    questionTags:{type:[String],required:"Question must have a tags"},
    noOfAnswers:{type:Number,default:0},
    upVotes:{type:[String],default:[]},
    downVotes:{type:[String],default:[]},
    userPosted:{type:String,required:"Question must have an auther"},
    userId:{ type:String},
    postedOn:{type:Date,default:Date.now},
    answer:[{
        answerBody:String,
        userAnswered:String,
        userId:String,
        answeredOn:{type:Date,default:Date.now}
    }]

});
export default mongoose.model("Question",QuestionSchema );