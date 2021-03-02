const { Schema, model } = require("mongoose");

const UserSchema = Schema({
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
  verificationCode: {
    type: String,
    required: true,
  },
  shippingAddress: {
    type: Array,
    default: [],
  },
  tsCreate: {
    type: Date,
    default: Date.now,
  },
  enable: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("users", UserSchema);
