import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/database.js";
import contactRoute from "./routes/contact.js";
import bodyParser from "body-parser";
import cors from "cors";


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
