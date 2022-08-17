const express = require("express");
const router = express.Router();
const postProcessController = require("../../controllers/admin_controllers/postProcessController");

router.get("/", postProcessController.index);

module.exports = router;
