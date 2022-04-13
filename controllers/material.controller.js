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

module.exports.getAllMaterials = async (req, res) => {
  const materials = await MaterialModel.find();
  res.json(materials);
};

module.exports.getOneMaterial = async (req, res) => {
  const material = await MaterialModel.findById(req.params.id);
  res.json(material);
};

module.exports.deleteMaterial = async (req, res) => {
  try {
    await MaterialModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Item successfully deleted " });
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateMaterial = async (req, res) => {
  try {
    await MaterialModel.findByIdAndUpdate(
      { _id: req.params.id },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        return res.send(docs);
      }
    );
  } catch (error) {
    console.log(error);
  }
};
