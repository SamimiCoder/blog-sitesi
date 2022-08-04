const express = require("express");
const layouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const brsConnection = require("./models/brs-connection");
const path = require("path");
const expressEjsLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();
app.set("view engine", "ejs");
brsConnection.connectDb;
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public", "css")));
app.use(express.static(path.join(__dirname, "public", "scripts")));
let post = [
  {
    post_img_src: "images/for-slider/1.jpg",
    post_url: "/post",
    post_header: "POST HEADER",
    post_details: "lorem ipsum dolor sit amet consecetur adipiscing elit falan",
  },
  {
    post_img_src: "images/for-slider/2.jpg",
    post_url: "/post",
    post_header: "POST HEADER",
    post_details: "lorem ipsum dolor sit amet consecetur adipiscing elit falan",
  },
  {
    post_img_src: "images/for-slider/3.jpg",
    post_url: "/post",
    post_header: "POST HEADER",
    post_details: "lorem ipsum dolor sit amet consecetur adipiscing elit falan",
  },
  {
    post_img_src: "images/for-slider/4.jpg",
    post_url: "/post",
    post_header: "POST HEADER",
    post_details: "lorem ipsum dolor sit amet consecetur adipiscing elit falan",
  },
  {
    post_img_src: "images/for-slider/1.jpg",
    post_url: "/post",
    post_header: "POST HEADER",
    post_details: "lorem ipsum dolor sit amet consecetur adipiscing elit falan",
  },
  {
    post_img_src: "for-slider/3.jpg",
    post_url: "/post",
    post_header: "POST HEADER",
    post_details: "lorem ipsum dolor sit amet consecetur adipiscing elit falan",
  },
];
app.use(expressEjsLayouts);
require("./routers/routeManager")(app);
// app.listen(3000, "127.0.0.1", (error) => {
//   if (error) {
//     console.log("Bir hata oluştu :", error);
//   }
//   console.log("Server çalışıyor...");
// });
module.exports.post = post;
