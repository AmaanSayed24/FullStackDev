const express = require("express");
const app = express();

app.get('/',(req,res)=>{

    res.send('Hello from Exrpess!');
});
app.get('student',(req,res)=>{
    res.json()

    
});
app.listen(3000,()=>{
    console.log('listening on 3000')
});