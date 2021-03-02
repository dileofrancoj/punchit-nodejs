const router = require("express").Router();
const { contactEmail } = require("../controllers/contact");

// {name : 'nombre', lastname : 'apellido', email : 'email', comment : 'comentario'}
router.post("/", contactEmail);

module.exports = router;
