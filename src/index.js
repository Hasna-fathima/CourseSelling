import express from 'express';
import userRouter from '../Routers/user/userRouter.js'
import {connect} from '../config/db.js'; // Import the connect function from the db.js file
import cookieParser from 'cookie-parser';
import {v2 as cloudinary} from 'cloudinary';
const app= express();
const port = 3000;




app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user", userRouter);


connect().then(() => {
    
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}).catch((error) => {
    console.error("Error connecting to database:", error);
    process.exit(1); 
});


