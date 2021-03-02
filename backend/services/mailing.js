"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const sendMail = async ({
  to = process.env.USER_EMAIL,
  subject = "Nuevo contacto WEB",
  html,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // {host : "smtp.gmail.com", port : 587}
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.USER_EMAIL, // generated ethereal user
        pass: process.env.PASSWORD_EMAIL, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const { messageId } = await transporter.sendMail({
      from: '"👻" <no-remplay@correo.com>',
      to,
      subject,
      html,
    });

    return messageId;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = { sendMail };
