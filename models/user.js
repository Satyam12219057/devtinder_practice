
const mongoose =require('mongoose');
const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:4,
        maxLength:100,
    },
    lastName:{
        type:String,
        minLength:2,

            },
    email: {
        type: String,
        lowercase:true,
        required:true,
        unique: true,
        trim:true,

    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        min:18,

    },
    gender:{
        type:String,

        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error ("Gender data not valid ");
            }
        }

    },
    photoUrl:{
        type:String,
        default:"https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg"
    },
    about:{
        type:String,
        default:"This is default about the user!"
    },
    Skills:{
        type:[String]
    }

},{
    timestamps:true,
});
const User=mongoose.model("User",userSchema);
module.exports=User;



//required:true mens it is mendetory to fill this option
//unique is used to save from the duplicate  information
//trim is remove the unnecessary widespace

//validate function is only called when the new entry were coming into the database
//not for the data already present before the implementation of the function


