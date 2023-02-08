const express = require("express");
const {sumaController, dividirController, numeroController} = require("../controller/mathsController")
const router = express.Router();

router.get("/suma/:valor1&:valor2", sumaController);
router.get("/dividir/:dividendo&:divisor", dividirController)
router.get("/paridad/", numeroController)


module.exports = router;