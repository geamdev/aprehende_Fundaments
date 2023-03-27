// Los operadores son fundamentales en un lenguaje de programacion ya que nos permiten modificar un dato, o realizar una comparacion entre datos, direccionandolos por un camino logico

// Aritmeticos 
// Estos operadores nos permiten realizar operaciones matematicas

// Suma
const suma: number = 2 + 2;
console.log(`La suma de 2 + 2 es ${suma}`);

// Resta
const resta:number = 5-3;
console.log(`La resta de 5 - 3 es ${resta}`);

// Multiplicacion
const multiplicacion: number = 8 * 4;
console.log(`La multiplicacion de 8 * 4 es ${multiplicacion}`);

// Division
const division: number = 9 / 3;
console.log(`La division de 9 / 3 es ${division}`);

// Modulo
// Esta operacion nos permite obtener el residuo de una division
const modulo: number = 18 % 4;
console.log(`El modulo de 18 % 4 es ${modulo}`);

// Division entera
// Esta operacion nos permite obtener el resultado de una division sin decimales utilizando Math.floor() que es un metodo del objeto estandar Math
const divisionEntera: number = Math.floor(19 / 7);
console.log(`La division entera de 19 / 7 es ${divisionEntera}`);

// Potencia
const potencia = 8 ** 2;
console.log(`La potencia de 8 ** 2 es ${potencia}`);


// Comparacion
// Estos operadores como lo dice su nombre, nos permiten comparar dos valores entre si, y siempre nos devolvera un booleao es decir True o False

// Igual que
const igualQue: boolean = 2 == 2;
console.log(`2 == 2 es ${igualQue}`);
const igualQue2: boolean = "Hola" == "Hola";
console.log(`"Hola" == "Hola" es ${igualQue2}`);
const igualQue3: boolean = "hola" == "Hola";
console.log(`"hola" == "Hola" es ${igualQue3}`);

// Diferente que
const diferenteQue: boolean = 8 != 5;
console.log(`8 != 5 es ${diferenteQue}`);
const diferenteQue2: boolean = "hola" != "hola";
console.log(`"hola" != "hola" es ${diferenteQue2}`);
const diferenteQue3: boolean = "hola" != "Hola";
console.log(`"hola" != "Hola" es ${diferenteQue3}`);

// Mayor que
const mayorQue: boolean = 8 > 5;
console.log(`8 > 5 es ${mayorQue}`);

// Mayor o igual que
const mayorOIgualQue: boolean = 8 >= 5;
console.log(`8 >= 5 es ${mayorOIgualQue}`);

// Menor que
const menorQue: boolean = 8 < 5;
console.log(`8 < 5 es ${menorQue}`);

// Menor o igual que
const menorOIgualQue: boolean = 8 <= 5;
console.log(`8 <= 5 es ${menorOIgualQue}`);

// Asignacion
// Igual =
let numero: number = 15;

// Incremento +=
console.log(numero = numero += 2);
console.log(numero += 2);


// Decremento -=
console.log(numero = numero -= 2);
console.log(numero -= 2);

// Multiplicacion *=
console.log(numero = numero *= 2);
console.log(numero *= 2);

// Division /=
console.log(numero = numero /= 2);
console.log(numero /= 2);

// Modulo %=
console.log(numero = numero %= 2);
console.log(numero %= 2);

// Potencia **=
console.log(numero = numero **= 2);
console.log(numero **= 2);

// Division entera utilizando Math.floor()
console.log(numero = numero = Math.floor(numero /= 2));
console.log(numero = Math.floor(numero /= 2));

// Logicos
// Para entender a la perfección este tipo de operadores hay que primero comprender sus condiciones y respectivas tablas de verdad
// AND
const yLogico: boolean = true && true;
console.log(`true && true es ${yLogico}`);

// OR
const oLogico: boolean = true || false;
console.log(`true || false es ${oLogico}`);

// NOT
const negacion = !true;
console.log(`!true es ${negacion}`);

// Especiales 
// Estos operadores son especiales ya que son usados para operaciones de verificacion avanzada

// IS
// Este operador nos devuelve un valor booleano, y nos permite verificar si un valor es de un tipo especifico

// IN
// Este operador nos permite verificar si un valor se encuentra dentro de un arreglo esto lo veremos mas adelante



