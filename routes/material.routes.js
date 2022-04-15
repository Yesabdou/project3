const router = require("express").Router();
const MaterialController = require("../controllers/material.controller");
const RentController = require("../controllers/rent.controller");
const fileUploader = require('../config/cloudinary.config');

router.get("/", MaterialController.getAllMaterials);
router.get("/:id", MaterialController.getOneMaterial);
router.put("/:id", MaterialController.updateMaterial);
router.delete("/:id", MaterialController.deleteMaterial);
router.post("/new", MaterialController.newMaterial);

// rent routes
router.post("/:materialid/rents", fileUploader.single("image"), RentController.saveNewRent); // route OK
router.get("/:materialid/all-rents", RentController.seeAllRentsForOneMaterial); // route OK
router.get("/:materialid/rent/:rentid", RentController.seeOneRent); // route OK
router.patch("/:materialid/rent/:rentid", fileUploader.single("image"), RentController.updateOneRent); // route OK

module.exports = router;
