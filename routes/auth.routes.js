const router = require("express").Router();

router.get("/login", (req, res, next) => res.render("auth/login"));

router.post("/login");

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

//..............
