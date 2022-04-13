const mongoose = require("mongoose");
const Schema = require("mongoose");
const materialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ref: {
      type: String,
      required: true,
      unique: true,
    },
    owner: {
      type: [Schema.Types.ObjectId],
      ref: "UserModel",
    },
    categorie: {
      enum: ["Fauteuil roulant", "Chaise adaptée", "Matériel ludique"],
      default: "",
    },
    description: {
      type: String,
      maxlength: 240,
      trim: true,
    },
    picture: {
      type: String,
    },
    condition: {
      enum: ["Etat neuf", "Très bon état", "Bon état", "Etat satisfaisant"],
      default: "",
    },
    ageMin: {
      type: Number,
      min: 0,
      max: 17,
    },
    ageMax: {
      type: Number,
      min: 0,
      max: 18,
    },
  },
  { timestamps: true }
);

const MaterialModel = mongoose.model("material", materialSchema);

module.exports = MaterialModel;
