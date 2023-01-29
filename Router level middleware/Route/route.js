const express = require("express");
const app = express();

/*Code repetitive and tiresome to read when files get large*/ 
app.get('/',()=>{
    //handle root
})
app.get('/things/toys',(req,res)=>{
    //handle root
})
app.post('/things/toys',(req,res)=>{
    //handle root
})

app.get('/things/toys/:toyId',(req,res)=>{
    //handle root
})
app.put('/things/toys/:toyId',(req,res)=>{
    //handle root
})

/*route() to the rescue */
app.route('/things/toys')
.get((req,res)=>{/*handle root*/})
.post((req,res)=>{/*handle root*/})

app.route('/things/toys:toyId')
.get((req,res)=>{/*handle root*/})
.put((req,res)=>{/*handle root*/})

app.listen(3002,()=>{
    console.log("Listening PROTOCOL activated on port 3002")
})