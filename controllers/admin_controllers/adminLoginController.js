const adminLayout = require("../../views/admin_views/admin.ejs");
module.exports.index = function (req, res, next) {
  res.render("admin_login", { adminLayout: adminLayout });
};
