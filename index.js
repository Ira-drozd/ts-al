const express = require("express");
const path = require("path");
const config = require("./config");
const pagesRoutes = require("./routes/pages");
const nodemailer = require("./nodemailer/index");
const app = express();
const expressHbs = require("express-handlebars");
const hbs = require("hbs");

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts",
    defaultLayout: "main",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname + "/views/partials"));
app.set("views", "views");
app.use(express.static(path.join(__dirname + "/public")));
app.use(pagesRoutes);
app.use(nodemailer);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.render("error", {
    message: error.message,
    error: !config.IS_PRODUCTION ? {} : error,
  });
});

app.listen(config.PORT, function () {
  console.log(`Server has been started...${config.PORT}`);
});
