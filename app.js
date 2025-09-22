//it is the starting point of our project
const express=require("express");
const app=express();
//this is responsing all the request
app.use((req,res)=>{
    res.send("hello from server ");  
})
app.use("/hello",(req,res)=>{
    res.send("hello hello hello");
})
app.use((req,res)=>{
    res.send("hello from nodemone");
})
app.use("/test",(req,res)=>{
    res.send("hello from test");
})
app.listen(7777,()=>{
    console.log("Server is successfully listining on this port");
});


