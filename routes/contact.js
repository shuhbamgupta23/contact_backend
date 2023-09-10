import express from "express";
import {
  addContact,
  getContact,
  getSingleContact,
  updateContact,
  deleteContact,
} from "../controller/contact.js";

const contactRoute = express.Router();

contactRoute.get("/contact", getContact);

contactRoute.post("/contact/create", addContact);

contactRoute.get("/contact/:id", getSingleContact);

contactRoute.put("/contact/update/:id", updateContact);

contactRoute.delete("/contact/delete/:id", deleteContact);

export default contactRoute;
