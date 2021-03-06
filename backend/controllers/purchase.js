const Purchase = require("../models/Purchase");
const { newPurchase } = require("../services/purchase");

const create = async (req, res) => {
  try {
    const resultPurchaseOperation = await newPurchase(req);
    if (resultPurchaseOperation === "PURCHASE_OK")
      return res.status(201).json({ message: "Compra aprobada" });
    if (resultPurchaseOperation === "INVALID_PURCHASE")
      return res.status(400).json({ message: "Oops, algo salió mal" });
    if (resultPurchaseOperation === "PROBLEMS_WITH_PROCCESSING_PURCHASE")
      return res.sendStatus(500);
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
