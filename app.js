//İMPORTS
const express = require("express");
const layouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const brsConnection = require("./models/brs-connection");
const path = require("path");
const expressEjsLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Class references
const app = express();
const router = express.Router();
//wiev engine selecting
app.set("view engine", "ejs");
app.set("views",path.resolve(__dirname,"./src/views"))
//connect to mongo db
brsConnection.connectDB;
//css dosyalarını ve resimleri içeren public klasörünü tanımlama
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public", "css")));
//mongo db den post bilgileri çekilene kadar data demosu olan post arrayi
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
//request body den veri alabilmek için body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//express layouts middleware
app.use(expressEjsLayouts);
//route manager middleware
require("./routers/routeManager")(app);

//server a bağlanma ve çalıştırma
app.listen(process.env.PORT, "127.0.0.1", (error) => {
  if (error) {
    console.log("Bir hata oluştu :", error);
  }
  console.log("Server çalışıyor...");
});
//data demosu olan post arrayi export edilmesi
module.exports.post = post;
module.exports.dotenv = dotenv