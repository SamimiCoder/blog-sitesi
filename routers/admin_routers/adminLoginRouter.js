const express = require("express");
const router = express.Router();
const adminLoginController = require("../../controllers/admin_controllers/adminLoginController");

router.get("/admin", adminLoginController.index);
router.post("/admin", adminLoginController.postF);
module.exports = router;
