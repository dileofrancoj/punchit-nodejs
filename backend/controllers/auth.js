const User = require("../models/User");
const { hash, unhash } = require("../utils/bcrypt");

const auth = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }, { password: 1 });
    // Genero JWT con user._id
    console.log(user.password);
    const isPasswordValid = unhash(password, user.password);
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Usuario o password incorrectos" });
    }
    res.json({ message: "Bienvenid@", JWT: user._id });
    res.end();
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
