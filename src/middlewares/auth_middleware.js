const oturumAcilmis = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash("error", ["Oturum açmadan buraya erişemezsin UCUBE !!!"]);
    res.redirect("/login");
  }
};
const oturumAcilmamis = function (req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/yonetim");
  }
};
module.exports = {
  oturumAcilmis,
  oturumAcilmamis,
};
