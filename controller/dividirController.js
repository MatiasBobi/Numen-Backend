const dividirController = (req, res) => {

    resultado = {
      dividendo: Number(req.params.dividendo),
      divisor: Number(req.params.divisor),
    }
  
    if(Number(req.params.divisor) === 0){
      resultado.ERROR = '¡¡¡No se puede dividir por 0!!!'
      res.status(200).json({
        resultado
      })
    } else {
      resultado.resultadoFinal = resultado.dividendo / resultado.divisor;
      resultado.mensaje = `El resultado de la division es ${resultado.resultadoFinal}`;
      res.status(200).json({
        resultado
      })
    }}

    module.exports = {dividirController}