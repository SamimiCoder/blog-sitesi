const brs_connection = require("../models/brs-connection");
const post = require("../../app");
module.exports.index = function (req, res, next) {
  brs_connection.connectDB;
  brs_connection.post.find({}, function (err, result) {
    if (err) {
      console.log("bir hata meydana geldi :" + err);
      res.send("hata meydana geldi :" + err)
    }
    res.render("main.ejs", {
      post: result,
    });
  });
};