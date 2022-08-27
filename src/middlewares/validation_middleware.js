const { body } = require("express-validator");

const validateNewUser = () => {
  return [
    body("email")
      .trim()
      .isEmail()
      .withMessage("lütfen geçerli bir email adresi giriniz"),
    body("sifre")
      .trim()
      .isLength({ min: 6 })
      .withMessage("şifreniz en az 6 karakter olmalı")
      .isLength({ max: 20 })
      .withMessage("şifreniz en fazla 20 karakter olmalı"),
    body("ad")
      .trim()
      .isLength({ min: 3 })
      .withMessage("isminiz en az 3 karakter olmalı"),
    body("soyad")
      .trim()
      .isLength({ min: 2 })
      .withMessage("soyad en az 2 karakter olmalı"),
    body("resifre")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.sifre) {
          throw new Error("Şifreleriniz uyuşmuyor");
        }
        return true;
      }),
  ];
};
module.exports = {
  validateNewUser,
};
