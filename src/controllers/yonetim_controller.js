const brs_connection = require("../models/brs-connection");
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
const postEkleSayfasiniGoster = (req, res, next) => {
  res.render("post_ekle", {
    layout: "./layout/yonetim_layout.ejs",
  });
};
const postEkle = (req, res, next) => {
  let post_mesaj_bilgi = " ";
  brs_connection.addPostData(
    req.body.post_header,
    req.body.post_img,
    req.body.post_description,
    req.body.post_url
  );
  if (
    !req.body.post_header ||
    !req.body.post_img ||
    !req.body.post_description ||
    !req.body.post_url
  ) {
    console.log(
      "Post bilgilerinden biri veya bir kaçı boş bırakılmış lütfen hepsini doldurunuz"
    );
    post_mesaj_bilgi =
      "Post bilgilerinden biri veya bir kaçı boş bırakılmış lütfen hepsini doldurunuz";
    return post_mesaj_bilgi;
  } else {
    console.log("başarıyla kayıt edildi yine de kontrol et");
    post_mesaj_bilgi = "başarıyla kayıt edildi yine de kontrol et";
    res.redirect("/yonetim/post-ekle");
    return post_mesaj_bilgi;
  }
};

module.exports = {
  anasayfayiGoster,
  profilSayfasiniGoster,
  profilGuncelle,
  postEkleSayfasiniGoster,
  postEkle,
};
