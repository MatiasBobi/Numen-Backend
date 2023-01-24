const numeroController =  (req, res) =>{
    numero = req.query.numero

    if(Number(numero) % 2 !== 0){
        res.status(500).json({
        ERROR: 'No autorizado'      
      })
    } else {
      res.status(200).json({
        message: 'Autorizado'
      })
    }
  }

  module.exports = {numeroController}