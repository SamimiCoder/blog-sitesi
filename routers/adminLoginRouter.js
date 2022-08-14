const express = require("express");
const router = express.Router();
const adminLoginController = require("../controllers/adminLoginController");

router.get("/admin-login", adminLoginController.index);

module.exports = router;
