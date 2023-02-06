const express = require("express");
const logger = require("morgan")
const cors = require("cors")
const app = express();

const nombreyApellidoRouter = require("./routes/nombreyapellido")
const dividirRouter = require("./routes/dividir")
const sumaRouter = require("./routes/suma")
const numeroRouter = require("./routes/numero")
const listadecomprasRouter = require("./routes/listadecompras")
const saludoRouter = require("./routes/saludo")
const farmaciacity = require("./routes/farmaciacity")
const  {connect} = require("./db/db")
app.use(logger("dev"));
app.use(express.json())
app.use(cors())



/* NOMBRE Y APELLIDO */
app.use("/user", nombreyApellidoRouter);
/*---------------------------------*/



/* Division */
app.use("/dividir", dividirRouter)
/*---------------------------------*/

/* Sumar */
app.use("/sumar", sumaRouter);

/*---------------------------------*/

/* Numero par e impar */

app.use("/numero", numeroRouter)

/*---------------------------------*/

/* Lista de compras */

app.use("/listadecompras", listadecomprasRouter)

app.use('/saludo', saludoRouter)
/*---------------------------------*/

/* Lista de compras */

app.use("/farmacity", farmaciacity)
/*---------------------------------*/

connect();
module.exports = app

