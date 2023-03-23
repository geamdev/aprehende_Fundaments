// # A lo largo de la historia de los lenguajes de programación se han definido una variedad de tipos de datos para llegar a ser precisos en el la función principal de un programa, que es el procesamiento de información. En TypeScript los tipos de datos son los siguientes:


// Enteros( int, float, double, long, short, byte)
const numero: number = 6;
console.log(typeof(numero));

// Texto
const texto: string = "Hola Mundo";
console.log(typeof(texto));

// Booleanos
const verdadero: boolean = true;
console.log(typeof(verdadero));

//Undefined
const indefinido: undefined = undefined;
console.log(typeof(indefinido));

//Null
const nulo: null = null;
console.log(typeof(nulo));

// Array
// Array de numeros
const arreglo: number[] = [1, 2, 3, 4, 5];
console.log(typeof(arreglo));

// Array de texto
const arreglo2: string[] = ["Hola", "Mundo"];
console.log(typeof(arreglo2));

// Array de cualquier tipo de dato
const arreglo3: any[] = [1, "Hola", true];
console.log(typeof(arreglo3));

// Aunque el tipo any puede ser usado podemos ser estrictos y específicos para estos arrays que contienen diferentes tipos de datos.

const arreglo4: (number | string | boolean)[] = [1, "Hola", true];
console.log(typeof(arreglo4));

// Array de objetos
const arreglo5: object[] = [{ nombre: "Geam" }, { nombre: "Virgilio" }];
console.log(typeof(arreglo5));

// Void
// El tipo void es usado para indicar que una función no retorna ningún valor.
function saludar(): void {
  console.log("Hola Mundo");
}
saludar();






