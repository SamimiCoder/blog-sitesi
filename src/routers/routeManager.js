const postRoute = require("./postRouter");
const mainRoute = require("./mainRouter");
const registerRoute = require("./registerRouter");
const contactRoute = require("./contactRouter");
const aboutRoute = require("./aboutRouter");
const projectRoute = require("./projectsRouter");
const postPageRoute = require("./post_page_router");
const brs_connection = require("../models/brs-connection");
module.exports = function (app) {
  app.use("/", mainRoute);
  app.use("/posts", postRoute);
  app.use("/signup-newsletter", registerRoute);
  app.use("/contact", contactRoute);
  app.use("/about", aboutRoute);
  app.use("/projects", projectRoute);
  app.use("/", postPageRoute);
  app.use((req, res) => {
    res
      .status(404)
      .render("404", { title: "MENTAL ÇÖKÜNTÜ", layout: "404.ejs" });
  });
};
