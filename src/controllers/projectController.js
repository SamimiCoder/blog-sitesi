const brs_connection = require("../models/brs-connection")
module.exports.index = function (req, res, next) {
  
  brs_connection.project.find({}, (err, result) => {
    err
      ? console.log("bir hata meydana geldi :" + err)
      : res.render("projects", { projects: result });
  });
};