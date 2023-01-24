const express = require("express");
const { saludoController } = require("../controller/saludoController");

const router = express.Router()

router.post("/", saludoController)

module.exports = router