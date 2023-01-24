const sumaController =  (req, res) => {

    resultado = {
      numero1: Number(req.params.valor1),
      numero2: Number(req.params.valor2),
    }


      if(isNaN(resultado.numero1)|| isNaN(resultado.numero2)){
        res.json({
          ERROR: 'Se debe ingresar numeros.'
        })
    } else     if(Number(req.params.valor1) < 0 || Number(req.params.valor2) < 0 ){
      res.status(200).json({
        ERROR: "No se puede ingresar numeros negativos."
      })
    } else {
      res.status(200).json({
        resultado: Number(req.params.valor1) + Number(req.params.valor2)
      })
    }
  
  }

  module.exports = {sumaController}