const router = require("express").Router();
const authController = require("../controllers/authController");
router.get("/login", (req, res, next) => {
  authController.login_get(req, res, next);
});
router.post("/login", (req, res, next) => {});
router.get("/signup", (req, res, next) => authController.signup_get(req, res));
router.post("/signup", (req, res, next) => {
  authController.signup_post(req, res);
});
router.get("/signout", (req, res) => {});

module.exports = router;
