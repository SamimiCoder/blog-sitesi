const post = require("../app");
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
  res.render("main", { post: post });
};
