import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGO_URI);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://sheikha:Sheikhaalenezi98@cluster0.u4pltay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
