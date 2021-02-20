const { Router } = require("express");
const router = Router();

const { all, single } = require("../controllers/products");

router.get("/", all);
router.get("/:id", single);
module.exports = router;
