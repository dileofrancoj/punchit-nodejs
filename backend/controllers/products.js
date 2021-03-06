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

const approvePurchaseProducts = async (products) => {
  const productsArray = products.map(({ id, price, quantity }) =>
    Product.find({
      _id: id,
      price: price,
      stock: { $gte: quantity },
      enable: true,
    })
  );

  const [approvePurchaseResult] = await Promise.all(productsArray); // []
  if (approvePurchaseResult.length) return true; // [[]]
  return false;
};

const updateStock = async (products) => {
  console.log(products);
  try {
    const result = products.map(({ id, quantity }) => {
      Product.updateOne(
        { _id: id },
        {
          $inc: { stock: -quantity },
        }
      );
    });
    const [updatedStock] = await Promise.all(result);
    console.log(updatedStock);
    return;
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

module.exports = { all, single, updateStock, approvePurchaseProducts };
