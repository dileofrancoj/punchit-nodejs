const { Router } = require("express");

const { create, auth } = require("../controllers/auth");

const router = Router();

// [POST] /api/auth/ {email, name,lastname, password}
router.post("/", create);
router.post("/login", auth);

module.exports = router;
