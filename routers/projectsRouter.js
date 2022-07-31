const express = require("express");
const router = express.Router();
const projectsRoute = require("../controllers/projectController");

router.get("/", projectsRoute.index);

module.exports = router;
