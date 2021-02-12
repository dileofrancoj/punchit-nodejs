const { Router } = require("express");
const router = Router();
const { all, create } = require("../controllers/products");

router.get("/", all);
router.post("/", create);

module.exports = router;
