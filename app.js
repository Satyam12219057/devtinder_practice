//it is the starting point of our project
const express=require("express");
const connectDB=require("./config/database");
const User =require("./models/user");
const app=express();


app.post("/signup",async (req,res)=>{
    //here i am creating the dummy user and i want to push it into the data base
    const user= new User({
        firstName:"satyam",
        lastName:"tiwari",
        email:"tiwari@gmil.com",
        password:"akshay123"

    });
    try{
         await user.save();
    res.send("user added successfully");

    }catch(err){
        res.status(400).send("Error while saving the data into the database");
    }
   

});





//always  the first start the connection with the databse and then start the server



    connectDB().then(()=>{
    console.log("Database connection established.....");
    app.listen(7777, () => {
        console.log("Server is successfully running on port 7777");
    });
    }).catch(err=>{
    console.log("DataBase connection Error!!!!!", err);
   });




