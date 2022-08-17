module.exports.index = function (req, res, next) {
  res.render("post_process", { layout: "adminLayout.ejs" });
};
