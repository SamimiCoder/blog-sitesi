const postRoute = require("./postRouter");
const mainRoute = require("./mainRouter");
const registerRoute = require("./registerRouter");
const contactRoute = require("./contactRouter");
const aboutRoute = require("./aboutRouter");
const projectRoute = require("./projectsRouter");
const adminLoginRoute = require("./adminLoginRouter");
module.exports = function (app) {
  app.use("/", mainRoute);
  app.use("/posts", postRoute);
  app.use("/register", registerRoute);
  app.use("/contact", contactRoute);
  app.use("/about", aboutRoute);
  app.use("/projects", projectRoute);
  app.use("/admin-login", adminLoginRoute);
};
