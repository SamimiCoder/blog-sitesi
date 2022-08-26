const router = require("express").Router();
const auth_controller = require("../controllers/auth_controller");
router.get("/login", auth_controller.loginFormunuGoster);
router.post("/login", auth_controller.login);
router.get("/register", auth_controller.registerFormunuGoster);
router.post("/register", auth_controller.register);
router.get("/forgot-password", auth_controller.forgotPasswordFormunuGoster);
router.post("/forgot-password", auth_controller.forgotPassword);
module.exports = router;
