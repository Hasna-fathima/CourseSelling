import express from'express';
import mongoose from 'mongoose';




const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        minLength:3,
        maxLength:30,
    },
    hashPassword:{
        type:String,
        minLength:6,
        required:true
    },
    firstname:{
        type:String,
        required:true,
        maxLength:20,
        minLength:3
    },
    lastname:{
        type:String,
        required:true,
        maxLength:20,
    },
    course:[{type:mongoose.Types.ObjectId, ref:"Course"}]

},


    {timestamps:true}
)
const Usermodel=mongoose.model('user',userSchema)


export default Usermodel




