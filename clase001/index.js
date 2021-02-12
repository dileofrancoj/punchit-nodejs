// Express: Tiene por objetivo levantar un servidor web (puerto a gusto) de forma sencilla
const express = require("express");
const logger = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");

const products = require("./routes/products");

const app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/products", products);

app.listen(3000);
