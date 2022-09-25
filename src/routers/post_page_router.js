const express = require("express");
const router = express.Router();
const postPageController = require("../controllers/post_page_controller");

router.get("/:_id", postPageController.index);

module.exports = router;
