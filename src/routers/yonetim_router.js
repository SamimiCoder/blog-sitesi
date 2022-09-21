const router = require("express").Router();
const yonetimController = require("../controllers/yonetim_controller");
const authMiddleware = require("../middlewares/auth_middleware");
const multerConfig = require("../configs/multer_config");
router.get(
  "/",
  authMiddleware.oturumAcilmis,
  yonetimController.anasayfayiGoster
);
router.get(
  "/profil",
  authMiddleware.oturumAcilmis,
  yonetimController.profilSayfasiniGoster
);

module.exports = router;
