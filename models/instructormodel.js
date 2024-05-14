import  express from'express';
import  mongoose from 'mongoose'




const instructerSchema=new mongoose.Schema({
  
    name:{
        type:String,
        required:true,
        maxLength:20,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minLength:3,
        maxLength:30,
    },
    role:{
        type:String,
        enum:["instructor", "admin"]        
    },
    course:[{type:mongoose.Types.ObjectId, ref:"Course"}]
},
    { timestamps:true}
)
export const instructermodel=mongoose.model('user',userSchema)


 