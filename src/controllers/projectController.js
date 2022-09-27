

module.exports.index = function (req, res, next) {
  
  res.render("projects",{projects:getDataApi})
};