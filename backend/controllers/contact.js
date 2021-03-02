const { sendMail } = require("../services/mailing");
const { contactTemplate } = require("../utils/contactTemplate");
const contactEmail = async (req, res) => {
  // service -> sendEmail ( pepito se contacto con vos. Datos de contacto. Consulta )
  try {
    const { name, lastname, comment, email } = req.body;
    const html = contactTemplate(name, lastname, comment, email);
    await sendMail({ html });
    res.json({ message: "email enviado" });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = { contactEmail };
