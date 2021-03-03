const uid = require("node-uuid");

const User = require("../models/User");
const { hash, unhash } = require("../utils/bcrypt");
const { createToken } = require("../services/auth");
const { sendMail } = require("../services/mailing");

const auth = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }, { password: 1 });
    const isPasswordValid = unhash(password, user.password);

    const JWTObject = {
      _id: user._id,
      email,
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
    const { email, password, name, lastname } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "El mail está en uso" });
    user = new User(req.body);
    user.password = hash(password);
    const verificationCode = uid();
    user.verificationCode = verificationCode; // e94a17ec-6ad1-4a0b-a5f9-8828909be39a
    await user.save();
    sendMail({
      to: email,
      subject: "Gracias por registrarte en mi aplicacion hermosa 🥰",
      html: registerTemplate({ name, lastname, verificationCode }),
    });
    res.sendStatus(201);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = { create, auth };
