const User = require("../models/User");
const { hash, unhash } = require("../utils/bcrypt");
const { createToken } = require("../services/auth");

const auth = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }, { password: 1 });
    const isPasswordValid = unhash(password, user.password);

    const JWTObject = {
      _id: user._id, // id -> servidor
      email, // cliente
    };

    const JWT = createToken(JWTObject);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Usuario o password incorrectos" });
    }
    res.json({ message: "Bienvenid@", JWT });
  } catch (e) {}
};

const create = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "El mail está en uso" });
    user = new User(req.body);
    user.password = hash(password);
    await user.save();
    res.sendStatus(201);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = { create, auth };
