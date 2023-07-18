const getContacts = (req, res) => {
    res.status(200).json({message: "Get All Contacts"})
};

const createContact = (req, res) => {
    res.status(200).json({message: "Create Contacts"})
};

const getContact = (req, res) => {
    res.status(200).json({message: `Get Contact for ${req.params.id}`})
};

const updateContact = (req, res) => {
    res.status(200).json({message: `Update Contacts for ${req.params.id}`})
};

const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete Contacts for ${req.params.id}`})
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
