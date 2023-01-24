const express = require("express");
const {sumaController} = require("../controller/sumaController")
const router = express.Router();

router.get("/suma/:valor1&:valor2", sumaController);

module.exports = router;