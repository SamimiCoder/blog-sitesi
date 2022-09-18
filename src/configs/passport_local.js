const localStrategy = require("passport-local").Strategy;
const passport = require("passport");
const User = require("../models/user_model");
const bcrypt = require("bcrypt");
module.exports = function (passport) {
  const options = {
    usernameField: "email",
    passwordField: "sifre",
  };
  passport.use(
    new localStrategy(options, async (email, sifre, done) => {
      try {
        const _bulunanUser = await User.findOne({ email: email });
        if (!_bulunanUser) {
          return done(null, false, { message: "user bulunamadı" });
        }
        const sifreKontrol = bcrypt.compare(sifre, _bulunanUser.sifre);
        if (!sifreKontrol) {
          return done(null, false, { message: "şifre hatalı" });
        } else {
          if (_bulunanUser && _bulunanUser.emailAktif == false) {
            return done(null, false, { message: "Email onaylanmamış" });
          } else {
            return done(null, _bulunanUser);
          }
        }
      } catch (error) {
        return done("try catch bloğu içindesin ve hata şu :" + error);
      }
    })
  );
};
passport.serializeUser(function (user, done) {
  console.log("sessiona kaydedildi :" + user.id);
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  console.log("sessiona kaydedilen id veritabanında bulundu");
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
