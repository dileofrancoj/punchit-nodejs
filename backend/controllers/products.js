const Product = require("../models/Product");

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await find(id);
    res.json(data);
  } catch (e) {
    console.error(e);
  }
};

const all = async (_, res) => {
  try {
    const data = await find();
    res.json(data);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const find = async (_id = null) => {
  try {
    if (_id) return await Product.findById(_id);
    return await Product.find();
  } catch (e) {
    throw e;
  }
};

module.exports = { all, single };
