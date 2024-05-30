const express=require('express');
const bodyParser=require('body-parser');
const db=require("./config/mongoose");
const feedback=require("./models/feedback");
const path=require("path");
const hbs=require("hbs");
const staticpath=path.join(__dirname,"public");
const viewspath=path.join(__dirname,"views");
const app=express();
const port=3000;
app.use(express.static('.'));
app.use(express.static(staticpath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine","hbs");
app.set("views",viewspath);
app.get('/',(req,res)=>{
    res.render("index");
});

app.post('/submit-contact', async (req, res) => {
    console.log("post");
    const {name, email, domain, message} = req.body;
    
    // Assuming you have a Feedback model defined using Mongoose
    const newFeedback = new feedback({
        name:name,
        email:email,
        domain:domain,
        message:message,
    });

    try {
        await newFeedback.save();
      
        res.send('Form submitted successfully'); // Send a success response
    } catch (error) {
        console.log(error);
        res.status(500).send('Form submission failed'); // Send an error response
    }
});
app.listen(port,(req,res)=>{
    console.log("server running on port",3000);
});