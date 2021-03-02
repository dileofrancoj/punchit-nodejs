const { Router } = require("express");

const { create, auth } = require("../controllers/auth");

const router = Router();

router.post("/", create);
router.post("/login", auth);
// router.get('/verificationCode/:verificationCode')

module.exports = router;
