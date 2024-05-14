import  generateToken from '../Utils/generateToken.js';
import Usermodel from '../models/usermodel.js'
import  bcryptjs from 'bcryptjs';
const  saltRounds = 10;

export async function signup (req, res) {
    
    try {
        console.log(req.body);

        const { firstname, lastname, email, password } = req.body;
        const userExist = await Usermodel.findOne({ email });
        if (userExist) {
            return res.status(400).send("User already exists");
        }

        const hashPassword = await bcryptjs.hash(password, saltRounds);
        console.log("hashed password is",hashPassword)

        const newUser = new Usermodel({ email, firstname,  hashPassword,lastname, });
        console.log('new user object',newUser)
        const newUserCreated = await newUser.save();
        console.log("newuser is created",newUserCreated);
        if (!newUserCreated) {
            return res.json("User is not created");
        }

        var token = generateToken(email);
        res.cookie("token",token)
        res.json(200).send("signed successfully");
    } catch (error) {
        console.log(error);
        res.status(500).json("Server error");
    }
};

 export async function signin(req, res) {
    try {
        const { email, password } = req.body;
        const userExist = await Usermodel.findOne({ email });
        if (!userExist) {
            return res.json("User does not exist");
        }

        const matchPassword = await bcryptjs.compare(password, userExist.hashPassword);
        if (!matchPassword) {
            return res.send("Password is not correct");
        }

        var token = generateToken(email);
        res.json(token);
    } catch (error) {
        console.log(error);
        res.status(500).json("Server error");
    }
};


