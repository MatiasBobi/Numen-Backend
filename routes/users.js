const express = require("express");
const {nombreyapellidoController} = require("../controller/usersController")

const router = express.Router();

router.get("/:nombre&:apellido", nombreyapellidoController)

module.exports = router;