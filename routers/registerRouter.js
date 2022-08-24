const express = require("express");
const router = express.Router();
const registerController = require("../src/controllers/registerController");

router.get("/", registerController.index);

module.exports = router;
