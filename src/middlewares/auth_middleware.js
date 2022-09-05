const oturumAcilmis = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash("error", ["Oturum açmadan buraya erişemezsin UCUBE !!!"]);
    res.redirect("/login");
  }
};
module.exports = {
  oturumAcilmis,
};
