const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const brs_connection = require("../models/brs-connection")
router.get("/", registerController.index);


module.exports = router;
