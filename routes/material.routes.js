const router = require("express").Router();
const MaterialController = require("../controllers/material.controller");

router.get("/", MaterialController.getAllMaterials);
router.get("/:id", MaterialController.getOneMaterial);
router.put("/:id", MaterialController.updateMaterial);
router.delete("/:id", MaterialController.deleteMaterial);
router.post("/new", MaterialController.newMaterial);

module.exports = router;
