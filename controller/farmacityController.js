const  { FarmaCity } = require("../models/farmaCity")



module.exports = {
    async crearUsuario (req, res) {
        try {
            const nuevoUsuario = new FarmaCity(req.body)
            await nuevoUsuario.save()
            res.status(201).json(nuevoUsuario)
        } catch (error) {
            res.status(501).json(error)

        }
    },
    async vistaDeUsuarios (req, res){
        try {
            const usuarios = await FarmaCity.find()
            res.status(200).json({usuarios})
        } catch (error) {
            res.status(500).json(error)
        }
    }
}