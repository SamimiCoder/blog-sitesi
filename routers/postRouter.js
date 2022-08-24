const express = require("express");
const router = express.Router();
const postController = require("../src/controllers/postController");

router.get("/", postController.post);

module.exports = router;
