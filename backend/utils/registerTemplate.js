const registerTemplate = ({ name, lastname, verificationCode }) =>
  `
        <html>
        <head></head>
        <body>
            <h3>¡Hola ${name}, ${lastname}. Gracias por registrarte!</h3>
            <a href=${process.env.DEV_URL}/auth/verificationCode/${verificationCode}>Click acá para confirmar la cuenta </a>
        </body>
        </html>
    `;
