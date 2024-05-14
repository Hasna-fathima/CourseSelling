import  express from  "express";
import {signup, signin} from '../../Controller/userController.js'
const  userRouter=express.Router();

userRouter.get('/',(req,res)=>{
    res.send("user Router")
})

userRouter.post('/signup',signup)
userRouter.post('/signin',signin)



export default userRouter


