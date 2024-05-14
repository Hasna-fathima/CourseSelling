import  mongoose from'mongoose';
import  dotenv from'dotenv';

dotenv.config();

export const connect = async () => {
    try {
        await mongoose.connect(process.env.db_url);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
        // Optionally, you might want to rethrow the error to handle it elsewhere
        throw error;
    }
};

