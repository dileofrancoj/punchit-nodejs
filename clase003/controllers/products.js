const { collection } = require("../models/Product");
const Product = require("../models/Product");

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findById(id);
    res.json(data);
  } catch (e) {
    console.error(e);
  }
};

const all = async (_, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = { all, single };
