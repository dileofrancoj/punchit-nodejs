const Purchase = require("../models/Purchase");

const create = async (req, res) => {
  try {
    const purchase = new Purchase(req.body);
    purchase.users = req.id; // global reference for user id
    const data = await purchase.save();

    res.status(201).json({ message: "Compra generada", data });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const all = async (req, res) => {
  try {
    const data = await Purchase.find({ users: req.id });
    res.json({ message: `Todas las compras del usuario ${req.id}`, data });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = { all, create };
