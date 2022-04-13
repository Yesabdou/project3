const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const logoUserController = require("../controllers/logoUser.constroller");
const userController = require("../controllers/user.controller");
const multer = require("multer");
const upload = multer();

const { isAuthenticated } = require("../Middleware/jwt.middleware");

// auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logOut, (req, res) => {
  req.logout();
  res.redirect("/login");
});

//user DB
router.get("/", isAuthenticated, userController.getAllUsers);
router.get("/:id", userController.getOneUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.patch("/addWishlist/:id", userController.addWishlist);
router.patch("/deletematerial/:id", userController.deleteMaterial);

//user logo
router.post(
  "/uploadlogo",
  upload.single("file"),
  logoUserController.uploadLogo
);

module.exports = router;
