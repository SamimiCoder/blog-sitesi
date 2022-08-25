const router = require("express").Router();
const auth_controller = require("../controllers/auth_controller");
router.get("/login", auth_controller.loginFormunuGoster);

router.get("/register", auth_controller.registerFormunuGoster);
router.post("/register", auth_controller.register);
router.get("/forgot-password", auth_controller.forgotPasswordFormunuGoster);
module.exports = router;
