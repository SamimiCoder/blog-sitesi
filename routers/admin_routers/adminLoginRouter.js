const express = require("express");
const router = express.Router();
const adminLoginController = require("../../controllers/admin_controllers/adminLoginController");

router.get("/admin", adminLoginController.index);

module.exports = router;
