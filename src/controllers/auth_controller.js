const { validationResult } = require("express-validator");
const passport = require("passport");
const user = require("../models/user_model");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
require("../configs/passport_local")(passport);
const loginFormunuGoster = (req, res, next) => {
  res.render("login", { layout: "./layout/auth_layout" });
};
const login = (req, res, next) => {
  const hatalar = validationResult(req);
  req.flash("email", req.body.email);
  req.flash("sifre", req.body.sifre);
  if (!hatalar.isEmpty()) {
    req.flash("validation_error", hatalar.array());

    res.redirect("/login");
  } else {
    return passport.authenticate("local", {
      successRedirect: "/yonetim",
      failureRedirect: "/login",
      failureFlash: "true",
    })(req, res, next);
  }

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
      if (_user && _user.emailAktif == true) {
        req.flash("validation_error", [
          { msg: "bu email daha önce kayıt olmuştur" },
        ]);
        req.flash("email", req.body.email);
        req.flash("ad", req.body.ad);
        req.flash("soyad", req.body.soyad);
        req.flash("sifre", req.body.sifre);
        req.flash("resifre", req.body.resifre);
        res.redirect("/register");
      } else if ((_user && _user.emailAktif == false) || _user == null) {
        if (_user) {
          user.findOneAndRemove({ _id: _user._id });
        }
        const newUser = user({
          email: req.body.email,
          ad: req.body.ad,
          soyad: req.body.soyad,
          sifre: await bcrypt.hash(req.body.sifre, 10),
        });
        await newUser.save();
        console.log("kullanıcı kayıt edildi", newUser);

        //jwt işlemleri
        const jwtBilgileri = {
          id: newUser.id,
          mail: newUser.email,
        };
        const jwtToken = jwt.sign(
          jwtBilgileri,
          process.env.CONFIRM_MAIL_JWT_SECRET,
          {
            expiresIn: "12h",
          }
        );
        console.log(jwtToken);
        //Mail gonderme işlemleri
        const url = process.env.WEB_SITE_URL + "verify?id=" + jwtToken;
        console.log("gidilecek url : " + url);
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
          },
        });
        transporter.sendMail(
          {
            from: "BRS Owner <info@brsyazilim.com",
            to: newUser.email,
            subject: "Emailinizi onaylayın yoksa giriş yapamazsınız",
            text: "emailinizi onaylamak için tıklayın :  " + url,
          },
          (error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log("mail gönderildi", info);
              transporter.close();
            }
          }
        );
        req.flash("success_message", {
          msg: "Lütfen mail kutunuzu kontrol edin.",
        });
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

const verifyMail = (req, res, next) => {
  try {
    const token = req.query.id;
    if (token) {
      jwt.verify(
        token,
        process.env.CONFIRM_MAIL_JWT_SECRET,
        async (e, decoded) => {
          if (e) {
            req.flash("HATA !! TOKEN HATALI YADA SÜRESİ GEÇMİŞ");
            res.redirect("/login");
          } else {
            const tokenIcındekiIdDegeri = decoded.id;
            const sonuc = await user.findByIdAndUpdate(tokenIcındekiIdDegeri, {
              emailAktif: true,
            });
            if (sonuc) {
              req.flash("success_message", [
                { msg: "Email Başarıyla Aktif edildi.." },
              ]);
              res.redirect("/login");
            } else {
              req.flash("error", "Lütfen tekrar kullanıcı oluşturun");
              res.redirect("/login");
            }
          }
        }
      );
    } else {
      req.flash("error", "Token yok veya geçersiz");
      res.redirect("/login");
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.session.destroy((error) => {
      res.clearCookie("connect.sid");
      //req.flash("success_message", [{ msg: "başarıyla çıkış yapıldı" }]);
      res.render("login", {
        layout: "./layout/auth_layout.ejs",
        success_message: [{ msg: "Başarıyla çıkış yapıldı" }],
      });
    });
  });
};

module.exports = {
  loginFormunuGoster,
  registerFormunuGoster,
  forgotPasswordFormunuGoster,
  register,
  login,
  forgotPassword,
  logout,
  verifyMail,
};
