const mongoose = require("mongoose");
const Schema = require("mongoose");
const MaterialModel = require("../Models/material.model");
const UserModel = require("../Models/user.model");

const rentSchema = new mongoose.Schema(
  {
    materialId: {
      type: Schema.Types.ObjectId,
      ref: "Material",
    },

    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    startDate: {
      type: Date,
      default: Date.now,
      required: true,
    },

    endDate: {
      type: Date,
      default: "",
      required: true,
    },

    status: {
      type: String,
      enum: ["En cours", "Rendu", "A venir"],
      default: "A venir",
      required: true,
    },

    rentedTo: {
      type: String,
      required: true,
    },

    adresse: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const RentModel = mongoose.model("Rent", rentSchema);

module.exports = RentModel;
