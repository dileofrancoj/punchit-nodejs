const { Schema, model } = require("mongoose");
// ts_create, ts_update, idCreate, enable

const ProductSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  condition: {
    type: String,
    default: "new",
  },
  description: {
    type: String,
    required: true,
  },
  enable: {
    type: Boolean,
    default: true,
  },
  available_quantity: {
    type: Number,
    required: true,
  },
});

// nombre de la colecc
module.exports = model("products", ProductSchema);
