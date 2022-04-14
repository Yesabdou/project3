const router = require("express").Router();
const MaterialController = require("../controllers/material.controller");
const RentController = require("../controllers/rent.controller")

router.get("/", MaterialController.getAllMaterials);
router.get("/:id", MaterialController.getOneMaterial);
router.put("/:id", MaterialController.updateMaterial);
router.delete("/:id", MaterialController.deleteMaterial);
router.get("/new")
router.post("/new", MaterialController.newMaterial);

// rent routes
router.get("/:id/new-rent");
router.post("/:id/new-rent", RentController.addNewRent);
router.get("/:id/all-rents", RentController.seeAllRents);
router.get("/:id/rent/:id", RentController.seeOneRent);
router.patch("/:id/rent/:id", RentController.updateOneRent);

module.exports = router;
