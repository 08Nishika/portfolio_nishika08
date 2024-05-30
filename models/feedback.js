const { text } = require("body-parser");
const mongoose=require('mongoose');
const { stringify } = require("querystring");

const feedbackSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    domain:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
});

const x=mongoose.model("feedbacks",feedbackSchema);
module.exports=x;
