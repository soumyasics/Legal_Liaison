const mongoose= require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type:String,

        required:true,
       
    },
    city:{
        type:String,
      
        required:true,
       
    },
    state:{
        type:String,
      
        required:true,
       
    },
    contact:{
        type:String,
       
        required:true,
    
    },
    email:{
        type:String,
        unique:true,
        required:true,
       
        dropDups: true
    },
    password:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    
    isActive:{
        type:Boolean,
        default:true
    },
});
module.exports=mongoose.model('users',userSchema)

