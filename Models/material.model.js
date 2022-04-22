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
      unique: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: String,
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
      type: String,
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

materialSchema.pre("save", async function (next) {
  const makeRef = () => {
    let ref = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (let i = 0; i < 5; i++)
      ref += possible.charAt(Math.floor(Math.random() * possible.length));

    return ref;
  };
  this.ref = makeRef();
  next();
});

const MaterialModel = mongoose.model("Material", materialSchema);

module.exports = MaterialModel;
