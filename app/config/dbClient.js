import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI; 

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("📌 Conectado a MongoDB con Mongoose");
    } catch (error) {
        console.error("❌ Error al conectar a MongoDB:", error);
        process.exit(1); // Sale del proceso si hay error
    }
};

export default connectDB;
