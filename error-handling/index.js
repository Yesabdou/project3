module.exports = (app) => {
  app.use((req, res, next) => {
    // this middleware runs whenever requested page is not available
    res.status(404).json({ errorMessage: "This route does not exist" });
  });

  // Authorization error handling
  app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
      res.status(err.status).send({ message: err.message });
    }
    next();
  });

  app.use((err, req, res, next) => {
    // whenever you call next(err), this middleware will handle the error
    // always logs the error
    console.error("ERROR", req.method, req.path, err);

    // only render if the error ocurred before sending the response
    if (!res.headersSent) {
      res.status(500).json({
        errorMessage: "Internal server error. Check the server console",
      });
    }
  });
};

module.exports.signUpErrors = (err) => {
  // on recupere le err de catch et on y injecte le texte
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "Veuillez rentrer un pseudo correct";

  if (err.message.includes("email")) errors.email = "Email incorrect";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit faire 6 caractères minimum";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Ce pseudo est déjà pris";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email est déjà enregistré";

  return errors;
};
