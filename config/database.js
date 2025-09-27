//mongoose documentation is very important and explaned properly evry schma and other things


//first we have to connect the the mongoose cluster
const mongoose=require("mongoose");

const connectDB=async()=>{
 await mongoose.connect(
    "mongodb+srv://satyamkumar45316:Satyam1234@9177cluster.yoimety.mongodb.net/my_new_database"
);
};
module.exports=connectDB;

