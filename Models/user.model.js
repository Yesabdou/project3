const mongoose = require("mongoose");
const Schema = require("mongoose");
const axios = require("axios");

const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const MaterialModel = require("../Models/material.model");
const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 60,
      unique: true,
      trim: true,
    },
    finess: {
      //siret asso
      type: String,
      required: true,
      unique: true,
      minlength: 9,
      maxlength: 9,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail], //pour valider le mail via la bibliotheque validator : npm i validator ajouter une classe en dessous pour afficher le message d'erreur
      lowercase: true,
      unique: true,
      trim: true,
    },
    adresse: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
    },
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
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
  const str = this.adresse.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // pour enlever les accents des e et a pour la requette
  await sleep(500);
  const result = await axios.get(
    `https://eu1.locationiq.com/v1/search.php?key=pk.4d8a87420e294c48e5a612ff6316fc35&q=${str}&format=json`
  );

  console.log(result.data[0].lat);

  this.latitude = result.data[0].lat;
  this.longitude = result.data[0].lon;
  next();
});

// userSchema.post("save", async function (next) {
//   next();
// });

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
