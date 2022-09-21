const anasayfayiGoster = function (req, res, next) {
  res.render("index", { layout: "./layout/yonetim_layout.ejs" });
};
const profilSayfasiniGoster = function (req, res, next) {
  res.render("profil", {
    user: req.user,
    layout: "./layout/yonetim_layout.ejs",
  });
};
const profilGuncelle = function (req, res, next) {
  const guncelBilgiler = {
    ad: req.body.ad,
    soyad: req.body.soyad,
  };
  try {
    if (req.file) {
      guncelBilgiler.avatar = req.file.filename;
    }
    console.log("Güncellenecek bilgiler : " + guncelBilgiler);
    console.log("resim yüklendi");
  } catch (hata) {
    console.log("bir hata meydana geldi :" + hata);
  }
};
module.exports = {
  anasayfayiGoster,
  profilSayfasiniGoster,
  profilGuncelle,
};
