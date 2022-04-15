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
router.get("/:id", userController.getOneUser); //route OK
router.put("/:id/update", userController.updateUser); //route OK
router.delete("/:id/delete", userController.deleteUser); // route OK
router.patch("/addWishlist/:id", userController.addWishlist);// a voir plus tard
router.patch("/deletematerial/:id", userController.deleteMaterial); // a voir plus tard

//rent route
router.get("/:userid/all-rents", RentController.seeAllRentsForOneUser); // route OK

//user logo
// router.post(
//   "/uploadlogo",
//   upload.single("file"),
//   logoUserController.uploadLogo
// );

module.exports = router;
