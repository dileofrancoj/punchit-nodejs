const { Router } = require("express");
const router = new Router();
const { all, create, contactInfo } = require("../controllers/purchase");

router.post("/", create);
router.get("/", all);

module.exports = router;
