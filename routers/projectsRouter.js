const express = require("express");
const router = express.Router();
const projectsRoute = require("../src/controllers/projectController");

router.get("/", projectsRoute.index);

module.exports = router;
