const brs_connection = require("../models/brs-connection");
const post = require("../../app");
module.exports.index = function (req, res, next) {
  brs_connection.connectDB;
  brs_connection.post.find({}, function (err, result) {
    res.render("main.ejs", {
      post: result,
    });
  });
};
