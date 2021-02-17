const { getAll } = require("../models/products");

const all = (req, res) => {
  const products = getAll();
  res.json(products);
};

const create = (req, res) => {
  // console.log(req) -> body, params, query string, cookies, session, files
  const {
    title,
    price,
    available_quantity,
    condition,
    description,
    warranty,
  } = req.body;
  const tranformedProduct = {
    title,
    condition,
    description,
  };
  // transformer

  res.status(201).json({ message: "created", product: tranformedProduct });
};

// products/180?title=iphone

const find = (req, res) => {
  console.log(req.params);
  console.log(req.query);
  const products = getAll();
  const { id } = req.params;
  const product = products.find((product) => product.id === parseInt(id));
  res.json(product);
};

module.exports = { all, create, find };
