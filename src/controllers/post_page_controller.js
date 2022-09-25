const brs_connection = require("../models/brs-connection");
const mongoose = require("mongoose");
const url = require("url");
module.exports.index = function (req, res, next) {
  const id = mongoose.Types.ObjectId(req.params._id.trim());
  brs_connection.connectDB;
  let url_parts = url.parse(req.url, false);
  let query = url_parts.href;
  brs_connection.post.findById(id, function (err, result) {
    console.log("bu url query :" + req.query);
    console.log("bu query id si :" + req.query.id);
    if (err) {
      console.log(err);
    } else {
      res.render("post-page", { post: result });
      console.log(result);
      console.log(req.body);
    }
  });
};
