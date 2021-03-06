const uid = require("node-uuid");
const moment = require("moment");

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
  } catch (e) {
    console.error(e);
    // verificar si el user no existe -> retornar un 401
  }
};

const validateAuth = async (req, res) => {
  try {
    const { verificationCode } = req.params;
    await User.findOneAndUpdate({ verificationCode }, { enable: true });
    res.redirect(`${process.env.DEV_FRONTEND_URL}/login`);
  } catch (e) {
    res.redirect(
      `${process.env.DEV_FRONTEND_URL}/login?error=INVALID_VALIDATION_EMAIL`
    );
  }
};

const create = async (req, res) => {
  try {
    const { email, password, name, lastname } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "El mail está en uso" });
    user = new User(req.body);
    user.password = hash(password);
    const verificationCode = uid();
    user.verificationCode = verificationCode;
    user.dateExpirationCode = moment(new Date()).add(1, "hours");
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

module.exports = { create, auth, validateAuth };
