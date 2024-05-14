import express from'express';
import mongoose from'mongoose'




const courseSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        minLength:3,
        maxLength:30,
    },
    hashPassword:{
        type:String,
        required:true
    },
    Firstname:{
        type:String,
        required:true,
        maxLength:20,
        minLength:3
    },
    Lastname:{
        type:String,
        required:true,
        maxLength:20,
    },
    course:[{type:mongoose.Types.ObjectId, ref:"Course"}]

},


    {timestamps:true}
)
export const coursemodel=mongoose.model('course',courseSchema)


 

