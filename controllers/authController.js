const User = require("../models/users");
const layout = require("express-ejs-layouts");
const login_get = (req, res) => {
  res.render("admin_login", {
    title: "Admin giriş",
    layout: "admin_login.ejs",
  });
};
const login_post = (req, res) => {};
const signup_get = (req, res) => {
  res.render("admin_signup", {
    title: "Kayıt Oluştur",
    layout: "admin_signup.ejs",
  });
};
const signup_post = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      res.redirect("/admin/login");
    })
    .catch((error) => {
      console.log("HATA MEYDANA GELDİ KAYIT OLUNAMADI :", error);
    });
};
const signout_get = (req, res) => {};
module.exports = {
  login_get,
  login_post,
  signup_get,
  signup_post,
  signout_get,
};
