const express = require("express");
const { listadecomprasController } = require("../controller/listController");

const router = express.Router();

router.get("/shoppingCart", listadecomprasController)

module.exports = router;