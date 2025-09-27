//it is the starting point of our project
const express=require("express");
const app=express();

const {adminAuth,userAuth}=require("./middlewares/auth.js");


//here we can handle all the request comming from the user first verified and then alloud


//here we are  going to use the middleware smartly
app.use("/admin",adminAuth);

app.post("/user/login",(req,res)=>{
    res.send("User logged in successfully");
})

app.get("/user/data",userAuth,(req,res)=>{
    res.send("User Data Sent");
});


//we have to use the middleware like this 
//app.use("/user",userAuth);

app.get("/user",userAuth,(req,res)=>{
    res.send("User Data Sent");
})


app.get("/admin/getAllData",(req,res)=>{
    //here we have to get the user
    res.send("all data Sent");
   });
app.get("/admin/deleteUser",userAuth,(req,res)=>{
    res.send("we have to delete all the user");
})



app.listen(7777,()=>{
    console.log("Server is successfully listining on this port");
});


