var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const expressLayout = require("express-ejs-layouts"); // import module express-ejs-layout
// const cors = require("cors");
const connectDB = require("./app_api/models/db");

var indexRouter = require("./app_server/routes/index");
var prodiRouter = require("./app_server/routes/prodi");
var usersRouter = require("./app_server/routes/users");
const fakultasRouter = require("./app_api/routes/fakultas");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayout); // use express-ejs-layout
// app.use(cors); //middleware cors

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/prodi", prodiRouter);
app.use("/api/fakultas", fakultasRouter);

// connect to monggodb
connectDB();
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;