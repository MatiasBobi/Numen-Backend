const saludoController = (req , res) =>{
    const nombre = req.body.name
    res.status(201).json({
      name: `Hola ${nombre}`,
      status:"success"
    })
  }

  module.exports = {saludoController}