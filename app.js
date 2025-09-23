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



//there is some specific thisg which required to help to design some variance in the routes
app.get("/ab?c",(req,res)=>{//mena this routes will be working on the /ac path also
    //mens it makes b optional
    res.send("variance in the routes");

})

//another variation in it
app.get(/a/,(req,res)=>{//this routes can work on the path which contains a
    res.send({firstName:"Satyam",lastName:"kumar"})

})


//here we have to create the dynamic routes
app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params);
    res.send({firstName:"satyam",lastName:"kumar"});
});





app.listen(7777,()=>{
    console.log("Server is successfully listining on this port");
});


