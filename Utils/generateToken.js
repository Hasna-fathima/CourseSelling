import  jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()
const secretkey=process.env.secret_Key;

 const generateToken=(email)=>{
return jsonwebtoken.sign({data:email},secretkey,{expiresIn:"1d"})


}
export default generateToken





