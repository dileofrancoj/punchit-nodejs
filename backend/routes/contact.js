const router = require("express").Router();
const { contactEmail } = require("../controllers/contact");

// {name : 'nombre', lastname : 'apellido', email : 'email', comment : 'comentario'}
/*
    CASO DE PRUEBA
    Desde postman: [POST] /contact {nombre : 'nombre', lastname, email, comment}
*/
router.post("/", contactEmail);

module.exports = router;
