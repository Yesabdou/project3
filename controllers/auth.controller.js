const { send } = require("express/lib/response");
const UserModel = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { signUpErrors } = require("../error-handling/index");

module.exports.signUp = async (req, res) => {
  const { pseudo, email, password } = req.body;

  try {
    const user = await UserModel.create({ pseudo, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err); // on envoie le err dans la fonction
    res.status(201).send(errors);
  }
};

module.exports.signIn = async (req, res) => {
  const maxAge = 3600000;
  const { email, password } = req.body;

  const foundUser = await UserModel.findOne({ email });

  if (!foundUser) {
    res
      .status(401)
      .json({ error: "Utilisateur introuvable vérifiez votre adresse email" });
    return;
  }

  if (bcrypt.compareSync(password, foundUser.password)) {
    const payload = { email };

    // creer une token  use the mail, the secret key in .ENV and crete a token-
    const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "1h",
    });
    res.cookie("jwt", authToken, { httpOnly: true, maxAge }); // le cookie on en fait quoi ?
    res.status(200).send({ authToken: authToken });
    return;
  } else {
    res.status(401).json({ error: "Mot de pass incorrect" });
  }
};

module.exports.logOut = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
