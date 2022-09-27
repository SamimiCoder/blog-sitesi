//İMPORTS
const express = require("express");
const layouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const brsConnection = require("./src/models/brs-connection");
const path = require("path");
const expressEjsLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./src/routers/auth_router");
const yonetimRouter = require("./src/routers/yonetim_router");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const MongoDBStore = require("connect-mongodb-session")(session);


//Class references
const app = express();
const router = express.Router();
//wiev engine selecting
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./src/views"));
//connect to mongo db
brsConnection.connectDB;
//css dosyalarını ve resimleri içeren public klasörünü tanımlama
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public", "css")));
//mongo db den post bilgileri çekilene kadar data demosu olan post arrayi

//request body den veri alabilmek için body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const sessionStore = new MongoDBStore({
  uri: "mongodb://localhost:27017",
  collection: "sessionlar",
});
app.use(
  session({
    secret: "secret key",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 100 * 60 * 60 * 24 },
    store: sessionStore,
  })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.validation_error = req.flash("validation_error");
  res.locals.success_message = req.flash("success_message");
  res.locals.email = req.flash("email");
  res.locals.ad = req.flash("ad");
  res.locals.soyad = req.flash("soyad");
  res.locals.sifre = req.flash("sifre");
  res.locals.resifre = req.flash("resifre");
  res.locals.login_error = req.flash("error");
  next();
});
app.use(passport.initialize());
app.use(passport.session());
app.use(expressEjsLayouts);
//route manager middleware
app.use("/", authRouter);
app.use("/yonetim", yonetimRouter);
require("./src/routers/routeManager")(app);

//server a bağlanma ve çalıştırma
app.listen(3000, "127.0.0.1", (error) => {
  if (error) {
    console.log("Bir hata oluştu :", error);
  }
  console.log("Server çalışıyor...");
});

module.exports.dotenv = dotenv;
