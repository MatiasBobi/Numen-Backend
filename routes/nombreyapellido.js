const express = require("express");
const {nombreyapellidoController} = require("../controller/nombreyapellidoController")

const router = express.Router();

router.get("/:nombre/:apellido", nombreyapellidoController)

  module.exports = router;