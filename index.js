

//variables d'environement et database
require("dotenv").config({ path: "./config/.env" });
require("./config/database");
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.routes");
const materialRoutes = require("./routes/material.routes");
const cors = require('cors');  
const session = require("express-session");

const UserModel = require("./Models/user.model");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000' , "https://handishare.netlify"]
  })
);

app.set('trust proxy', 1);

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
