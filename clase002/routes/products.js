const { Router } = require("express");
const router = Router();

const { all, create, find } = require("../controllers/products");
// router -> GET , POST, PUT (actualizacion completa), DELETE, PATCH (actualización parcial)

const { validateCreate } = require("./../middlewares/actions/product");

router.get("/:id", find);
router.get("/", all);
router.post("/", validateCreate, create);

module.exports = router;
