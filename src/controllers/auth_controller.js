const loginFormunuGoster = (req, res, next) => {
  res.render("login", { layout: "./layout/auth_layout" });
};
const login = (req, res, next) => {
  console.log(req.body);
  res.render("login", { layout: "./layout/auth_layout" });
};
const registerFormunuGoster = (req, res, next) => {
  res.render("register", { layout: "./layout/auth_layout" });
};
const register = (req, res, next) => {
  console.log(req.body);
  res.render("register", { layout: "./layout/auth_layout" });
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
