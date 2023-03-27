// En Ts las excepciones son manejadas de la misma manera que en Js es decir que cuando ocurre un error durante la ejecucion de un bloque de codigo, se puede lanzar una excepcion para indicar que algo salio mal y detener la ejecucion normal del programa

// try y catch son dos palabras clave utilizadas en la gestión de excepciones en TypeScript. El bloque try se utiliza para envolver el código que puede lanzar una excepción, mientras que el bloque catch se utiliza para capturar y manejar excepciones lanzadas desde el bloque try. Se pueden utilizar múltiples cláusulas catch para manejar diferentes tipos de excepciones, y se puede utilizar la cláusula finally para especificar un bloque de código que se ejecutará siempre.

// throw se utiliza para indicar que ha ocurrido un error o una situación excepcional en la ejecución del código y que es necesario tomar medidas especiales para manejarlo.

/*
  sintaxis
  try{
    contenido normal
  }
  except{
    contenido en caso de que exista un error
  }
  finally{
    contenido que siempre se va a ejcutar exista o no exista un error
  }
*/

try {
  const dividendo: number = 10;
  const divisor: number = 0;

  if (divisor === 0) {
    throw new Error("no se puede dividir por cero");
  }

  const resultado: number = dividendo / divisor;
  console.log(resultado);
} catch (error: any) {
  console.log('Hola ' + error.message);
} finally {
  console.log("Este mensaje siempre se mostrará.");
}







