const express = require("express");
const router = express.Router();
const adminLoginController = require("../../controllers/admin_controllers/adminLoginController");
const layout = require("express-ejs-layouts");
router.get("/admin", adminLoginController.index);
router.post("/admin", adminLoginController.postF);
module.exports = router;
