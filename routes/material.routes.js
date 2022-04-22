const router = require("express").Router();
const MaterialController = require("../controllers/material.controller");
const RentController = require("../controllers/rent.controller");
const fileUploader = require("../config/cloudinary.config");
const { isAuthenticated } = require("../Middleware/jwt.middleware");

router.get("/", MaterialController.getAllMaterials);
router.get("/:id", MaterialController.getOneMaterial);
router.put(
  "/:id",
  isAuthenticated,
  fileUploader.single("image"),
  MaterialController.updateMaterial
);
router.delete("/:id", isAuthenticated, MaterialController.deleteMaterial);
router.post(
  "/new",
  isAuthenticated,
  fileUploader.single("image"),
  MaterialController.newMaterial
);

// rent routes
router.post(
  "/:materialid/rents",
  isAuthenticated,
  fileUploader.single("image"),
  RentController.saveNewRent
); // route OK
router.get("/:materialid/all-rents", RentController.seeAllRentsForOneMaterial); // route OK
router.get("/:materialid/rent/:rentid", RentController.seeOneRent); // route OK
router.patch(
  "/:materialid/rent/:rentid",
  isAuthenticated,
  fileUploader.single("image"),
  RentController.updateOneRent
); // route OK

module.exports = router;
