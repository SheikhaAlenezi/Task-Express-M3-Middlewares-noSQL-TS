import express from "express";
import connectDB from "./database";
import postsRoutes from "./api/posts/posts.routes";
import { notFoundMiddleware } from "./middlewares/notFound.middleware";
import { errorHandlerMiddleware } from "./middlewares/errorHandler.middleware";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 8000;
dotenv.config();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/media", express.static(path.join(__dirname, "../media")));

app.use("/posts", postsRoutes);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
