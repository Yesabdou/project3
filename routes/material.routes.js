const router = require("express").Router();
const materialController = require("../controllers/material.controller");

router.post("/new", materialController.newMaterial);

module.exports = router;
