import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/database.js";
import contactRoute from "./routes/contact.js";
import bodyParser from "body-parser";
import cors from "cors";
import cloudinary from "cloudinary";

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/", contactRoute);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("listening on port " + process.env.PORT);
});

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_KEY_SECRET,
});
