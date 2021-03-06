const { Schema, model } = require("mongoose");

const UserSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    shippingAddress: {
      type: Array,
      default: [],
    },
    verificationCode: {
      type: String,
      required: true,
    },
    dateExpirationCode: {
      type: Date,
      required: true,
    },
    enable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
// req.id
// createdAt -> Date.now
// updatedAt -> Date.now -> update -> Date.now

module.exports = model("users", UserSchema);
