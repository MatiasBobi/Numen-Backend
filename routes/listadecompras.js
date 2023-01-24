const express = require("express");
const { listadecomprasController } = require("../controller/listadecomprasController");

const router = express.Router();

router.get("/", listadecomprasController)

module.exports = router;