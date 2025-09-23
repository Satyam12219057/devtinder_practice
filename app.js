//it is the starting point of our project
const express=require("express");
const app=express();


//we have to allouded to make multiple routes but we have to send the response at last

app.use("/user",(req,res,next)=>{
  //Routes handlers

  console.log("Handling the route user!!");
  next();//when next come it can send the request to the next route handler
  //res.send("Response1!");
 

},
(req,res,next)=>{
    console.log("handling the route user2!!");
    res.send("2nd user");
    next();
},
(req,res,next)=>{
    console.log("handling the another route handler");
    next();
},(req,res,next)=>{
    console.log("in express we have allouded to make the multiple route handlers but at the last we have to send the response also");
    res.send("finally we have to end the response");

}


);
app.listen(7777,()=>{
    console.log("Server is successfully listining on this port");
});


