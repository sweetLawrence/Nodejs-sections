const express = require("express");
const app = express();
const things = require('./Router folder/things');

app.use("/things", things);
// use things.js file to handle endpoints
// that start with /things

app.get('/',(req,res)=>{
    res.send("You have hit the home route")
})

app.listen(3002,()=>{
    console.log("Listening PROTOCOL activated on port 3002")
})