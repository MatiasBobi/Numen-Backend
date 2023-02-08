module.exports = {
  dividirController(req, res) {
    resultado = {
      dividendo: Number(req.params.dividendo),
      divisor: Number(req.params.divisor),
    };

    if (Number(req.params.divisor) === 0) {
      resultado.ERROR = "¡¡¡No se puede dividir por 0!!!";
      res.status(200).json({
        resultado,
      });
    } else {
      resultado.resultadoFinal = resultado.dividendo / resultado.divisor;
      resultado.mensaje = `El resultado de la division es ${resultado.resultadoFinal}`;
      res.status(200).json({
        resultado,
      });
    }
  },

  numeroController(req, res) {
    numero = req.query.numero;

    if (Number(numero) % 2 !== 0) {
      res.status(500).json({
        ERROR: "No autorizado",
      });
    } else {
      res.status(200).json({
        message: "Autorizado",
      });
    }
  },
  sumaController(req, res)  {

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
};
