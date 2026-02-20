const express = require("express");
const router = express.Router();
const controller = require("./controller");


router.post("/user/store",controller.store);

router.get("/user/list",controller.list)
router.put("/user/update/:id",controller.updatedd)

router.delete("/user/delete/:id",controller.deletedd)
module.exports = router;
    