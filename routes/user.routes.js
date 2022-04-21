const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const logoUserController = require("../controllers/logoUser.constroller");
const userController = require("../controllers/user.controller");
const RentController = require("../controllers/rent.controller");
const MaterialController = require("../controllers/material.controller");
const fileUploader = require("../config/cloudinary.config");

const { isAuthenticated } = require("../Middleware/jwt.middleware");

// const fileUploader = require('../config/cloudinary.config');

// auth
router.post("/register", fileUploader.single("image"), authController.signUp);
router.post("/login", authController.signIn);
router.get("/verify", isAuthenticated, (req, res, next) => {
  console.log(`req.payload`, req.payload);
  res.status(200).json(req.payload);
});

//user DB
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getOneUser);
router.put(
  "/:id/update",
  fileUploader.single("image"),
  userController.updateUser
);
router.delete("/:id/delete", userController.deleteUser);
router.patch("/addWishlist/:id", userController.addWishlist);
router.patch("/delWishlist/:id", userController.deleteWishlist);

//rent route
router.get("/:userid/all-rents", RentController.seeAllRentsForOneUser); // route OK

//user logo
// router.post(
//   "/uploadlogo",
//   upload.single("file"),
//   logoUserController.uploadLogo
// );

module.exports = router;
