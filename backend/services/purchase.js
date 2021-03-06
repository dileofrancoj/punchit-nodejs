const Purchase = require("../models/Purchase");
const {
  approvePurchaseProducts,
  updateStock,
} = require("../controllers/products");
const { calculateTotal } = require("../utils/purchase");
const uuid = require("node-uuid"); // id de la operacion
const { createTicket } = require("../utils/pdfGen");

const newPurchase = async (req) => {
  try {
    const idOperation = uuid();
    const { products } = req.body;
    const purchase = new Purchase(products);
    purchase.users = req.id;
    purchase.idOperation = idOperation;
    // transaction
    const validPurchase = await approvePurchaseProducts(products); // <Promise>
    if (!validPurchase) return "INVALID_PURCHASE";
    const total = calculateTotal(products);
    purchase.total = total;
    await purchase.save();
    await updateStock(products);
    // transaction end
    createTicket(idOperation, products, total);
    return "PURCHASE_OK";
  } catch (e) {
    return "PROBLEMS_WITH_PROCCESSING_PURCHASE";
  }
};

module.exports = { newPurchase };
