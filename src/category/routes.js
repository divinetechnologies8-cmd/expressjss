const express = require("express");
const router = express.Router();
const controller = require("./controller");


router.post("/category/store",controller.store);

router.get("/category/list",controller.list)
router.put("/category/update/:id",controller.updatedd)

router.delete("/categorys/delete/:id",controller.deletedd)
module.exports = router;
