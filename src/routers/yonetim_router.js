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
router.get(
  "/post-ekle",
  authMiddleware.oturumAcilmis,
  yonetimController.postEkleSayfasiniGoster
);
router.post(
  "/post-ekle",
  authMiddleware.oturumAcilmis,
  yonetimController.postEkle
);
router.get(
  "/post-liste",
  authMiddleware.oturumAcilmis,
  yonetimController.post_liste_sayfasiniGoster
);
router.get("/proje-ekle",authMiddleware.oturumAcilmis,yonetimController.projeEkleSayafasiniGoster)
router.post("/proje-ekle",authMiddleware.oturumAcilmis,yonetimController.projeEkle)
module.exports = router;
