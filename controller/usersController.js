module.exports = {
    nombreyapellidoController (req, res) {
        res.send(`Hola ${req.params.nombre} ${req.params.apellido}`);
    }
}