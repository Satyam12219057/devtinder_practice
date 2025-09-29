//it is the starting point of our project
const express=require("express");
const connectDB=require("./config/database");
const User =require("./models/user");
const app=express();


//this is a middelware  which convert the json data into the javascript object format

app.use(express.json());


app.post("/signup",async (req,res)=>{
    //here i am creating the dummy user and i want to push it into the data base

    //this is the not the good way to  post the data in the database

    const user=new User(req.body);

    try{
     await user.save();
    res.send("user added successfully");

    }catch(err){
        res.status(400).send("Error while saving the data into the database"+err.message());
    }
   // our server is not able to  understand the data in json format

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




