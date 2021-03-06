const { Schema, model } = require("mongoose");

const PurchaseSchema = Schema(
  {
    total: {
      type: Number,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    users: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    enable: {
      type: Boolean,
      default: true,
    },
    idOperation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("purchase", PurchaseSchema);
