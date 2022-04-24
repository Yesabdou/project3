const UserModel = require("../Models/user.model");
const MaterialModel = require("../Models/material.model");

const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password"); // get all the users without password
  res.json(users);
};

module.exports.getOneUser = async (req, res) => {
  //if the id is valid return the user  without password , else send message.
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  const user = await UserModel.findById(req.params.id).select("-password"); // return the user without the psw
  res.json(user);
};

module.exports.updateUser = async (req, res) => {
  // usind PUT
  // console.log(req.params.id);

  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,

      req.body,
      // for test only with bio  { $set: { bio: req.body.bio, finess: req.body.finess, phone:req.body.phone,  } },
      { new: true, upsert: true, setDefaultsOnInsert: true } // mandatory params
    );
    res.status(201).json(updatedUser);
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
//relation many to many : must use populate
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
};
//
module.exports.deleteWishlist = async (req, res) => {
  const userId = req.params.id;
  await UserModel.findByIdAndUpdate(
    req.params.id,
    {
      $pull: { material: req.body.materialIdToDel },
    },
    { new: true, upsert: true }
  );
  console.log(`id of material ${req.body.materialIdToDel}`);
};
