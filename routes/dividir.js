const express = require("express");
const {dividirController }= require("../controller/dividirController")
const router = express.Router();


router.get("/:dividendo&:divisor", dividirController)
module.exports = router;