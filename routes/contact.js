import express from "express";
import {
  addContact,
  getContact,
  getSingleContact,
  updateContact,
  deleteContact,
} from "../controller/contact.js";

import multer from "multer";
const contactRoute = express.Router();

contactRoute.get("/contact", getContact);

contactRoute.post("/contact/create", addContact);

contactRoute.get("/contact/:id", getSingleContact);

contactRoute.put("/contact/update/:id", updateContact);

contactRoute.delete("/contact/delete/:id", deleteContact);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    cb: null, "Image.png";
  },
});

const upload = multer({ storage: storage });

contactRoute.post("/upload", upload.single("file"), (req, res) => {
  console.log("UPLOAD is working");
});
export default contactRoute;
