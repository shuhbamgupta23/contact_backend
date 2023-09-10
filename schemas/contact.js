import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
    },
    birth: {
      type: Date,
    },
  },
  { timeStamps: true, collection: "contacts" }
);

const Contact = mongoose.model("contact", contactSchema);

export default Contact;
