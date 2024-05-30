const mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/portfolio');
const db=mongoose.connection;
db.on("error",console.error.bind(console,"error"));
db.once("open",function(){
    console.log("database connected successfully");
});
const data=module.exports