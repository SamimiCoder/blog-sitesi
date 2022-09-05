const { validationResult } = require("express-validator");
const passport = require("passport");
const user = require("../models/user_model");

require("../configs/passport_local")(passport);
const loginFormunuGoster = (req, res, next) => {
  res.render("login", { layout: "./layout/auth_layout" });
};
const login = (req, res, next) => {
  const hatalar = validationResult(req);
  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());
    req.flash("email", req.body.email);
    req.flash("sifre", req.body.sifre);
    res.redirect("/login");
  }

  return passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: "true",
  })(req, res, next);

  res.render("login", { layout: "./layout/auth_layout" });
};
const registerFormunuGoster = (req, res, next) => {
  res.render("register", { layout: "./layout/auth_layout" });
};
const register = async (req, res, next) => {
  const hatalar = validationResult(req);
  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());
    req.flash("email", req.body.email);
    req.flash("ad", req.body.ad);
    req.flash("soyad", req.body.soyad);
    req.flash("sifre", req.body.sifre);
    req.flash("resifre", req.body.resifre);
    res.redirect("/register");
  } else {
    try {
      const _user = await user.findOne({ email: req.body.email });
      if (_user) {
        req.flash("validation_error", [
          { msg: "bu email daha önce kayıt olmuştur" },
        ]);
        req.flash("email", req.body.email);
        req.flash("ad", req.body.ad);
        req.flash("soyad", req.body.soyad);
        req.flash("sifre", req.body.sifre);
        req.flash("resifre", req.body.resifre);
        res.redirect("/register");
      } else {
        const newUser = user({
          email: req.body.email,
          ad: req.body.ad,
          soyad: req.body.soyad,
          sifre: req.body.sifre,
        });
        await newUser.save();
        console.log("kullanıcı kayıt edildi", newUser);
        req.flash("success_message", "Kullanıcı başarıyla kayıt edildi");
        res.redirect("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }
};
const forgotPasswordFormunuGoster = (req, res, next) => {
  res.render("forgot_password", { layout: "./layout/auth_layout" });
};
const forgotPassword = (req, res, next) => {
  console.log(req.body);

  res.render("forgot_password", { layout: "./layout/auth_layout" });
};

module.exports = {
  loginFormunuGoster,
  registerFormunuGoster,
  forgotPasswordFormunuGoster,
  register,
  login,
  forgotPassword,
};
