const mongoose = require("mongoose");
const Schema = require("mongoose");

const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const MaterialModel = require("../Models/material.model");
const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 14,
      unique: true,
      trim: true,
    },
    finess: {
      //siret asso
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail], //pour valider le mail via la bibliotheque validator : npm i validator ajouter une classe en dessous pour afficher le message d'erreur
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024, // pour le cryptage
      minlength: 6,
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png",
    },
    bio: {
      type: String,
      max: 1024,
    },
    wishlist: {
      //a enlever
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);
//crypter le mot de pass avant d'envoyer a la bas de données. installer npm i -s bcrypt
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
