const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const logoUserController = require("../controllers/logoUser.constroller");
const userController = require("../controllers/user.controller");
const RentController =require("../controllers/rent.controller")

const { isAuthenticated } = require("../Middleware/jwt.middleware");

// const fileUploader = require('../config/cloudinary.config');

// auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);

//user DB
router.get("/", isAuthenticated, userController.getAllUsers);
router.get("/:id", userController.getOneUser);
router.put("/:id/update", userController.updateUser);
router.delete("/:id/delete", userController.deleteUser);
router.patch("/addWishlist/:id", userController.addWishlist);
router.patch("/deletematerial/:id", userController.deleteMaterial);

//rent route
router.get("/:userid/all-rents", RentController.seeAllRentsForOneUser); // route OK

//user logo
// router.post(
//   "/uploadlogo",
//   upload.single("file"),
//   logoUserController.uploadLogo
// );

module.exports = router;
