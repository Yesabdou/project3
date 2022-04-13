const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.routes");
const materialRoutes = require("./routes/material.routes");
const session = require("express-session");

const UserModel = require("./Models/user.model");

//variables d'environement et database
require("dotenv").config({ path: "./config/.env" });
require("./config/database");

const app = express();

//pour les fichierJson
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

// routes
app.use("/api/user", userRoutes);
app.use("/api/material", materialRoutes);
