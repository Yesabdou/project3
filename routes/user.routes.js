const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const fileUploader = require("../config/cloudinary.config");
const { isAuthenticated } = require("../Middleware/jwt.middleware");

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
router.put("/:id/update", isAuthenticated, userController.updateUser);
router.delete("/:id/delete", isAuthenticated, userController.deleteUser);

module.exports = router;
