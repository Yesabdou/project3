const MaterialModel = require("../Models/material.model");

//route ok / faire le liens avec owner
module.exports.newMaterial = async (req, res) => {
  try {
    const {
      name,
      ref,
      category,
      description,
      condition,
      ageMin,
      ageMax,
      picture,
    } = req.body;
    let pic;
    if (req.file) {
      pic = req.file.path;
    } else {
      pic = picture;
    }
    const material = await MaterialModel.create({
      name,
      ref,
      category,
      description,
      condition,
      ageMin,
      ageMax,
      picture: pic,
    });
    res.status(201).json({ material: material._id });
  } catch (error) {
    console.log(error);
  }
};
//route ok
module.exports.getAllMaterials = async (req, res) => {
  const materials = await MaterialModel.find();
  res.json(materials);
};
// route ok
module.exports.getOneMaterial = async (req, res) => {
  const material = await MaterialModel.findById(req.params.id);
  res.json(material);
};

//route ok
module.exports.deleteMaterial = async (req, res) => {
  try {
    await MaterialModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Item successfully deleted " });
  } catch (error) {
    console.log(error);
  }
};
//route ok
module.exports.updateMaterial = async (req, res) => {
  try {

    const updatedMat = await MaterialModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      //{ $set: { ref: req.body.ref } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(201).json(updatedMat);
  } catch (error) {
    console.log(error);
  }
};
