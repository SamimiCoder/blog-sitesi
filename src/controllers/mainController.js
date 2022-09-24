const brs_connection = require("../models/brs-connection");
const post = require("../../app");
module.exports.index = function (req, res, next) {
  let post = [
    {
      post_img_src: "images/for-slider/1.jpg",
      post_url: "/post",
      post_header: "POST HEADER",
      post_details:
        "lorem ipsum dolor sit amet consecetur adipiscing elit falan",
    },
    {
      post_img_src: "images/for-slider/2.jpg",
      post_url: "/post",
      post_header: "POST HEADER",
      post_details:
        "lorem ipsum dolor sit amet consecetur adipiscing elit falan",
    },
    {
      post_img_src: "images/for-slider/3.jpg",
      post_url: "/post",
      post_header: "POST HEADER",
      post_details:
        "lorem ipsum dolor sit amet consecetur adipiscing elit falan",
    },
    {
      post_img_src: "images/for-slider/4.jpg",
      post_url: "/post",
      post_header: "POST HEADER",
      post_details:
        "lorem ipsum dolor sit amet consecetur adipiscing elit falan",
    },
    {
      post_img_src: "images/for-slider/1.jpg",
      post_url: "/post",
      post_header: "POST HEADER",
      post_details:
        "lorem ipsum dolor sit amet consecetur adipiscing elit falan",
    },
    {
      post_img_src: "for-slider/3.jpg",
      post_url: "/post",
      post_header: "POST HEADER",
      post_details:
        "lorem ipsum dolor sit amet consecetur adipiscing elit falan",
    },
  ];
  brs_connection.connectDB;
  brs_connection.post.find({}, function (err, result) {
    res.render("main.ejs", {
      post: result,
    });
  });
};
