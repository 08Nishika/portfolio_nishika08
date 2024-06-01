const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://nishika:nishu08@cluster0.sofquat.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0');
const db=mongoose.connection;
db.on("error",console.error.bind(console,"error"));
db.once("open",function(){
    console.log("database connected successfully");
});
const data=module.exports