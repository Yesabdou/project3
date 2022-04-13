const MaterialModel = require("../Models/material.model");

module.exports.newMaterial = async (req, res) => {
  console.log(req.body);
  try {
    const { name, ownedBy } = req.body;
    const material = await MaterialModel.create({ name, ownedBy });
    res.status(201).json({ material: material._id });
  } catch (error) {
    console.log(error);
  }

  // pouruqoi on ne peut pas ajouter plusieurs objets??
};
