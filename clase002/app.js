const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const dotenv = require("dotenv");
dotenv.config(); // habilita las variables de entorno en nuestra aplicacion

// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");
const products = require("./routes/products");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/products", products);
// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.sendStatus(404); // 404
});

// error handler
app.use(function (err, _, res, __) {
  console.error(err); // log forever
  // console.info | warn | log | error
  res.sendStatus(500);
});

module.exports = app;
