import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGO_URI);

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("Mongo URI not found in environment variables");

    const conn = await mongoose.connect(uri);
    console.log(` MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
