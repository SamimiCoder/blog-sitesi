const post = require("../../app");
const brs_connection = require("../models/brs-connection");
module.exports.post = function (req, res) {
  brs_connection.post.find({}, (err, result) => {
    err
      ? console.log("bir hata meydana geldi :" + err)
      : res.render("posts", { post: result });
  });
};
