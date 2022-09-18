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
  console.log(req.body);
};
module.exports = {
  anasayfayiGoster,
  profilSayfasiniGoster,
  profilGuncelle,
};
