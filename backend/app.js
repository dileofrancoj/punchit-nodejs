var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const { dbConnection } = require("./database/config");

dbConnection();

const products = require("./routes/products");
const auth = require("./routes/auth");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// use de routes
app.use("/products", products);
app.use("/auth", auth);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.sendStatus(404);
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err);
  res.sendStatus(500);
});

module.exports = app;
