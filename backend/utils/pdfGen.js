const pdf = require("html-pdf");

// nombre del file
const createTicket = (name, products, total) => {
  const html = generateHTML(products, total);
  pdf.create(html).toFile(`./tickets/${name}.pdf`, (err, _) => {
    if (err) throw new Error("No se pudo crear el PDF");
  });
};

const generateHTML = (products, total) => `
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <style>
                h3 : { color : "red" }
            </style>

        </head> 
        <body>
            <h3>Total a pagar: ${total} </h3>
        </body>
    </html>
`;

module.exports = { createTicket };
