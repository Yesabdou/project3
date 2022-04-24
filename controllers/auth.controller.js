const { send } = require("express/lib/response");
const UserModel = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { signUpErrors } = require("../error-handling/index");
const axios = require("axios");

//route ok
module.exports.signUp = async (req, res) => {
  const { pseudo, adresse, finess, email, password } = req.body;

  // const str = adresse.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // pour enlever les accents des e et a pour la requette

  try {
    // moved to the user model
    // const result = await axios.get(
    //   `https://eu1.locationiq.com/v1/search.php?key=pk.4d8a87420e294c48e5a612ff6316fc35&q=${str}&format=json`
    // );

    // console.log(result.data[0].lat);
    // const latitude = result.data[0].lat;
    // const longitude = result.data[0].lon;

    const user = await UserModel.create({
      pseudo,
      adresse,
      finess,
      email,
      password,
      latitude,
      longitude,
    });

    res.status(201).json({
      Association: ` l'Association  ${user.pseudo} a été créée avec succés`,
      id: user.id,
    });
  } catch (err) {
    console.log(err);

    const errors = signUpErrors(err); // on envoie le err dans la fonction pour la traiter
    res.status(201).send(errors);
  }
};
//route ok
module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await UserModel.findOne({ email });

  if (!foundUser) {
    res
      // .status(401)
      .json({ error: "Utilisateur introuvable vérifiez votre adresse email" });
    return;
  }

  if (bcrypt.compareSync(password, foundUser.password)) {
    const payload = { id: foundUser._id, email };

    // create a token with  using the id, the secret key in .ENV
    const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
      // the secret key is in the env, (donc forget to share it)
      algorithm: "HS256",
      expiresIn: "1h",
    });
    res.status(200).send({ authToken: authToken });
    return;
  } else {
    res
      // .status(401)
      .json({ error: "Mot de pass incorrect" });
  }
};

//logout à faire dnas le front en supprimeant le local storage
