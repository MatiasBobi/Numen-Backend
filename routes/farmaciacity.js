const express = require("express");
const router = express.Router();
const {crearUsuario, vistaDeUsuarios} = require("../controller/farmacityController")


router.post("/crearUser", crearUsuario)
router.get("/usuarios", vistaDeUsuarios)

module.exports = router;