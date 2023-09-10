import Contact from "../schemas/contact.js";
export const getContact = async (req, res) => {
  try {
    const allContact = await Contact.find({});
    res.status(200).json({ status: "SUCCESS", allContact });
  } catch (err) {
    res.status(500).json({ status: "FAILED", err });
  }
};

export const addContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(200).json({ status: "SUCCESS", newContact });
  } catch (err) {
    res.status(500).json({ status: "FAILED", err });
  }
};

export const getSingleContact = async (req, res) => {
  const id = req.params.id;
  try {
    const singleUser = await Contact.findById(id);
    res.status(200).json({ status: "SUCCESS", singleUser });
  } catch (err) {
    res.status(500).json({ status: "FAILED", err });
  }
};

export const updateContact = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await Contact.findByIdAndUpdate(id, req.body);
    res.status(200).json({ status: "SUCCESS", updatedUser });
  } catch (err) {
    res.status(500).json({ status: "FAILED", err });
  }
};



export const deleteContact = async (req, res) => {
  const id = req.params.id;
  try {
    const removedContact = await Contact.findByIdAndRemove(id);
    res.status(200).json({ status: "SUCCESS", removedContact });
  } catch (err) {
    res.status(500).json({ status: "FAILED", err });
  }
};
