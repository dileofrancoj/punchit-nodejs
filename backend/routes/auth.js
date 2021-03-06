const { Router } = require("express");

const { create, auth, validateAuth } = require("../controllers/auth");

const router = Router();

router.post("/", create);
router.post("/login", auth);
router.get("/authorization/:verificationCode", validateAuth);

module.exports = router;
