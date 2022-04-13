const UserModel = require("../Models/user.model");
const MaterialModel = require("../Models/material.model");

const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password"); // select permet de pas renvoyer certaines infos
  res.json(users);
};

module.exports.getOneUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  const user = await UserModel.findById(req.params.id).select("-password");
  res.json(user);
};

module.exports.updateUser = async (req, res) => {
  console.log(req.params.id);

  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await UserModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { bio: req.body.bio } },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        return res.send(docs);
      }
    );
  } catch (error) {
    console.log(error);
  }
};
module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  try {
    await UserModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "successfully deleted " }); //pour envoyer un message au front
  } catch (error) {
    console.log(error);
  }
};

//...........................................
//fonction qui ajoute le matériel de l'utilisateur et vis versa
module.exports.addWishlist = async (req, res) => {
  const userId = req.params.id;
  console.log(` --------the id of the user is  ${userId}`);

  await UserModel.findByIdAndUpdate(
    req.params.id,
    {
      $addToSet: { wishlist: req.body.materialIdToAdd },
    },
    { new: true, upsert: true }
  );
  console.log(`id of material ${req.body.materialIdToAdd}`);

  await MaterialModel.findByIdAndUpdate(
    req.body.materialIdToAdd,
    {
      $addToSet: { wishlist: userId },
    },
    { new: true, upsert: true }
  );
};
//fonction qui supprimer le matériel de l'utilisateur et vis versa
module.exports.deleteMaterial = async (req, res) => {
  const userId = req.params.id;
  await UserModel.findByIdAndUpdate(
    req.params.id,
    {
      $pull: { material: req.body.materialIdToDel },
    },
    { new: true, upsert: true }
  );
  console.log(`id of material ${req.body.materialIdToDel}`);

  await MaterialModel.findByIdAndUpdate(
    req.body.materialIdToDel,
    {
      $pull: { ownedBy: userId },
    },
    { new: true, upsert: true }
  );
};
