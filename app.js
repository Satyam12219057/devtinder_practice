//it is the starting point of our project
const express=require("express");
const app=express();
//this is responsing all the request
 
//if we use the use() call then it will match all the https calss function
app.use("/user",(req,res)=>{
    res.send("it can handle all the https request");
})
app.get("/user",(req,res)=>{
    res.send({firstName:"Satyam",lastName:"kumar"});
});
app.post("/user",(req,res)=>{
    res.send("Data successfully saved to the database");
});

app.delete("/user",(req,res)=>{
    res.send("deletetion successfully");
})

app.use("/test",(req,res)=>{
    res.send("hello from the server");
})

app.listen(7777,()=>{
    console.log("Server is successfully listining on this port");
});


