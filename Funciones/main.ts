// Una de las utilidades principales de una función es la de encapsular un bloque de código y poder reutilizarlo en cualquier lugar de nuestro software
`
  sintaxis
  function  'nombre' ('pararametros'){
    retorno   // cuerpo | scope
  }
`


// Se utiliza una palabra reservada funtion, para referenciarse a la creacion de una funcion

function saludo (): void{
  console.log('Hello word');
}

saludo();

// A las funciones se les pueden pasar argumentos al momento de utilizar la función e internamente utilizarlos como parámetros que realizen una operación o funcionaidad deseada

function suma (num1: number, num2: number): void{
  const resultado = num1 + num2;
  console.log(`La suma de ${num1} + ${num2} = ${resultado}`);
}

console.log(suma(1,2));

// Generalmente las funciones solamente realizan la operación o la función necesario y devuelven un resultado, para que en otra parte del código podamos utilizar dicho resulto, para ello utilizamos la palabra reservada return

function sumar ( num1: number, num2: number ): number{
  const resultado: number = num1 + num2;
  return resultado;
}

console.log(sumar(2,4))

// Valores por defecto en una funcion

function resta (num1: number, num2: number, num3: number = 0): number{
  return num1 + num2 + num3;
}

console.log(3,2);
console.log(3,2,4);

// Valores opcionales 
function multiplicar (num1: number, num2: number, num3?: number): number{
  if (num3){
    return num1 * num2 * num3;
  } else {
    return num1 * num2;
  }
}

console.log(3,4);
console.log(5,3,2);

// Funciones Anonimas

const funcSumar = function (num1: number, num2: number): number{
  return num1 + num2
}

console.log(funcSumar(1,2))

// Array Functions
// Sintaxis

// const 'nombre' = ('parametros) => 'retorno directo'

/*
  const nombre = ('parametros') => {
    retorno
  }
*/

const funcRestar = (num1: number, num2: number): number => num1 - num2

console.log(funcRestar(4,2))