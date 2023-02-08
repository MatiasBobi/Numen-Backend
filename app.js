const express = require("express");
const logger = require("morgan")
const cors = require("cors")
const app = express();


const usersRouter = require("./routes/users")
const mathsRouter = require("./routes/maths")
const listRouter = require("./routes/list")
const saludoRouter = require("./routes/saludo")
app.use(logger("dev"));
app.use(express.json())
app.use(cors())



/* NOMBRE Y APELLIDO */
app.use("/users", usersRouter);
/*---------------------------------*/



/* Maths */
app.use("/maths", mathsRouter)
/*---------------------------------*/




/* Lista de compras */

app.use("/list", listRouter)
/*---------------------------------*/


/* saludo http post */
app.use('/saludo', saludoRouter)
/*---------------------------------*/

module.exports = app

