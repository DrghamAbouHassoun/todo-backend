import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

const connectToDatabase = async () => {
    mongoose.connect(`${process.env.MONGODB_URL}`).then(() => {
        console.log("Connected to MongoDB");
    }).catch(err => {
        console.log(err);
    })
}

export default connectToDatabase;