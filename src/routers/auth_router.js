const router = require("express").Router();
const auth_controller = require("../controllers/auth_controller");
const validator = require("../middlewares/validation_middleware");
const authMiddleware = require("../middlewares/auth_middleware");
router.get(
  "/login",
  authMiddleware.oturumAcilmamis,
  auth_controller.loginFormunuGoster
);
router.post(
  "/login",
  authMiddleware.oturumAcilmamis,
  validator.validateLogin(),
  auth_controller.login
);
router.get(
  "/register",
  authMiddleware.oturumAcilmamis,
  auth_controller.registerFormunuGoster
);
router.post(
  "/register",
  authMiddleware.oturumAcilmamis,
  validator.validateNewUser(),
  auth_controller.register
);
router.get(
  "/forgot-password",
  authMiddleware.oturumAcilmamis,
  auth_controller.forgotPasswordFormunuGoster
);
router.post(
  "/forgot-password",
  authMiddleware.oturumAcilmamis,
  auth_controller.forgotPassword
);
router.get("/verify", auth_controller.verifyMail);
router.get("/logout", authMiddleware.oturumAcilmis, auth_controller.logout);
module.exports = router;
