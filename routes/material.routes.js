const router = require("express").Router();
const MaterialController = require("../controllers/material.controller");
const RentController = require("../controllers/rent.controller")

router.get("/", MaterialController.getAllMaterials);
router.get("/:id", MaterialController.getOneMaterial);
router.put("/:id", MaterialController.updateMaterial);
router.delete("/:id", MaterialController.deleteMaterial);
router.get("/new")
router.post("/new", MaterialController.newMaterial);

router.get("/:id/new-rent");
router.post("/:id/new-rent", RentController.newRent);

module.exports = router;
