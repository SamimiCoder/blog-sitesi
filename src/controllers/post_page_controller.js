const brs_connection = require("../models/brs-connection");
module.exports.index = function (req, res, next) {
  brs_connection.post.find({}, function (err, result) {
    console.log(result);
    res.render("post-page.ejs", {
      post: result,
    });
  });
};
