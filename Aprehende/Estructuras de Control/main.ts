// Las estructuras de control nos ayudan a definir un camino en nuestro programa y poder responer a las preguntas necesarias.Que pasa si el usuario hace esto? esto nos permite tener un control y hacer que nuestro programa responde de una u otra manera dependiendo de acciones previas.

// if
// sintaxis:
`
  if (condicion) {
    // codigo
  }
`
// El contenido se mostrara siempre y cuando la condicion sea verdadera

if (true) {
  console.log('La condicion es verdadera');
}

if (false) {
  console.log('No se mostrara porque la condicion es falsa'); 
}

// else
// Para referirnos a que sucede si la condicion es falsa, usamos else


if (true) {
  console.log('La condicion es verdadera');
} else {
  console.log('La condicion es falsa');
}

if (false) {
  console.log('La condicion es verdadera');
} else {
  console.log('La condicion es falsa');
}

// Utilizando operadores condicionales en la condicion
if (5 > 3) {
  console.log('La condicion es verdadera');
} else {
  console.log('La condicion es falsa');
}

// Utilizando operadores logicos en la condicion
if (5 > 3 && 5 > 4) {
  console.log('La condicion es verdadera');
} else {
  console.log('La condicion es falsa');
}

if (5 > 3 || 5 < 4) {
  console.log('La condicion es verdadera');
} else {
  console.log('La condicion es falsa');
}

// Utilizamos variables dentro de la condicion

const a: number = 5;
const b: number = 10;
const x: boolean = a <= b;
const y: boolean = a == b;

// else if
// Podemos agregar mas condiciones a nuestra condicion inicial
let numero: string | null = prompt('Ingrese un numero del 1 al 5 \n');

if (numero == '1') {
  console.log('El numero es 1');
}
else if (numero == '2') {
  console.log('El numero es 2');
}
else if (numero == '3') {
  console.log('El numero es 3');
}
else if (numero == '4') {
  console.log('El numero es 4');
}
else if (numero == '5') {
  console.log('El numero es 5');
}
else {
  console.log('No ingresaste un numero entre 1 - 5');
}

