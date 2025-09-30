//it is the starting point of our project
const express=require("express");
const connectDB=require("./config/database");
const User=require("./models/user");
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
//g.et user  by email



app.get("/user", async (req, res) => {//it  can promise user to response proprly
    const userEmail = req.body.email;
    try {
        console.log(userEmail);
        const user=await User.findOne({email:userEmail});//use always the same parameter an the schema have

        if(!user){
            res.send("user not found");
        }
        res.send(user);
    //     const user = await User.find({ email: userEmail });  // ✅ correct field mapping
    //    if(user.size()==0){
    //     res.status(404).send("user not found");
    //    }
    //     else{

    //         res.send(user);
    //     }

        
    } catch (err) {
        res.status(400).send("Something went wrong.....");
    }
});


//note whenever we can do the db operation then we use async await

app.get("/feed",async (req,res)=>{
   try{
    const users=await User.find({});
    res.send(users);
   }
   catch(err){
    res.status(400).send("something went wrong");

   }
});


//delete api
app.delete("/user",async (req,res)=>{
    const userId= req.body.userId;

    try{
        console.log(userId);
        const users= await User.findByIdAndDelete(userId);
        res.send("user deleted successfully");

    }catch(err){
        //500 status code means internal server error
        res.status(500).send("something went wrong.... ")
    }
})


//update the data of the user now 
app.patch("/user",async(req,res)=>{
    const userId=req.body.userId;//destructuring here 
    
    try{
        //now i am using the return document here before mean it can return data before updation
       const user= await User.findByIdAndUpdate(userId, req.body,{
            returnDocument:"before"
        });
        res.send("updation of the data successfully ");
        }
    catch(err){
        res.status(400).send("SOMETHING WENT WRONG");
    }

})

//any data apart from the schema is ignored by the by the data

    connectDB().then(()=>{
    console.log("Database connection established.....");
    app.listen(7777, () => {
        console.log("Server is successfully running on port 7777");
    });
    }).catch(err=>{
    console.log("DataBase connection Error!!!!!", err);
   });




