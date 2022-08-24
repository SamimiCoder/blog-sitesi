const express = require("express");
const router = express.Router();
const contactController = require("../src/controllers/contactController");

router.get("/", contactController.index);

module.exports = router;
