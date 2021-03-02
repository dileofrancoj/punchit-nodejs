const contactTemplate = ({ name, lastname, comment, email }) => `
        <html>
        <head></head>
        <body>
            <h4>Se contacto con vos: ${name} ${lastname}</h4>
            <p>Su pregunta: </p>
            <p>${comment} </p>
            <p>Contacto : ${email}</p>
        </body>
        </html>
      
`;
module.exports = { contactTemplate };
