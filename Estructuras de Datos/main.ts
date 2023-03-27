// Agrupador: cada uno de los tipos tiene su simbolo de agrupador (corchetes, llaves) cada uno de ellos nos permite identificar con que tipo de estructura estamos trabajando

// Estructuras de datos
// Son formas de almacenar y organizar datos para su posterior uso
// Las estructuras de datos son una forma de organizar los datos para que puedan ser utilizados de manera eficiente

// Array
// Es una estructura de datos que nos permite almacenar una lista de datos

// Sintaxis
// let nombre: tipo[] = [valor1, valor2, valor3, ...]

// Ejemplo
let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros)

let nombres: string[] = ['Juan', 'Pedro', 'Maria', 'Jose', 'Luis', 'Ana']
console.log(nombres)

let booleanos: boolean[] = [true, false, true, false, true, false]
console.log(booleanos)

let cualquierCosas: any[] = [1, 'Juan', true, { nombre: 'Juan' }, [1, 2, 3, 4, 5]]
console.log(cualquierCosas)

// Para acceder a cada uno de los elementos del array utilizamos el indice del elemento
const numero = numeros[0]
const nombre = nombres[2]
const booleano = booleanos[4]
const cualquierCosa = cualquierCosas[3]

console.log(numero, nombre, booleano, cualquierCosa)

// Si deseamos cambiar el valor de un elemento del array, lo hacemos de la siguiente manera, primero accedemos al elemento y luego le asignamos el nuevo valor
numeros[0] = 100
numeros[3] = 400
console.log(numeros)

// Metodos de los arrays
// push: agrega un elemento al final del array
numeros.push(11)
console.log(numeros)

// pop: elimina el ultimo elemento del array
numeros.pop()
console.log(numeros)

// shift: elimina el primer elemento del array
numeros.shift()
console.log(numeros)

// unshift: agrega un elemento al inicio del array
numeros.unshift(0)
console.log(numeros)

// splice: elimina un elemento del array (indice, cantidad de elementos a eliminar)
numeros.splice(0, 1)
console.log(numeros)

// splice: agrega un elemento al array (indice, cantidad de elementos a eliminar, elemento a agregar)
numeros.splice(0, 0, 1)


// Objetos
// Es una estructura de datos que nos permite almacenar una lista de datos con un nombre asociado a cada uno de ellos

// Sintaxis
// let nombre: { nombrePropiedad: tipo, nombrePropiedad: tipo, ... } = { nombrePropiedad: valor, nombrePropiedad: valor, ... }

// Ejemplo
let persona: { nombre: string, edad: number, casado: boolean } = { nombre: 'Juan', edad: 30, casado: false };

// Para acceder a cada uno de los elementos del objeto utilizamos el nombre de la propiedad
console.log(persona.nombre);
console.log(persona.edad);

// Para modificar el valor de una propiedad del objeto lo hacemos de la siguiente manera
persona.nombre = 'Pedro';
persona.edad = 40;
console.log(persona);


// Metodos de los objetos
// Object.keys: devuelve un array con los nombres de las propiedades del objeto
console.log(Object.keys(persona));

// Object.values: devuelve un array con los valores de las propiedades del objeto
console.log(Object.values(persona));

// Object.entries: devuelve un array con los nombres y valores de las propiedades del objeto
console.log(Object.entries(persona));

// Object.assign: copia las propiedades de un objeto a otro
let persona2: { nombre: string, edad: number, casado: boolean } = { nombre: 'Maria', edad: 25, casado: true };
console.log(persona2);
Object.assign(persona2, persona);
console.log(persona2);

