const router = require("express").Router();
const yonetimController = require("../controllers/yonetim_controller");
const authMiddleware = require("../middlewares/auth_middleware");
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
router.post(
  "/profil-guncelle",
  authMiddleware.oturumAcilmis,
  yonetimController.profilGuncelle
);

module.exports = router;
