// Metodos de un string, nos permiten modificar, acceder, eliminar, etc. al contenido de un string retornando un nuevo string

// 1. Metodo charAt()
// Nos permite acceder a un caracter en una posicion especifica
let nombre = "Geam";
console.log(nombre.charAt(0)); // G

// 2. Metodo concat()
// Nos permite concatenar dos o mas strings
let apellido = "Jaramillo";

console.log(nombre.concat(" ", apellido)); // Geam Jaramillo

// 3. Metodo indexOf()
// Nos permite buscar un caracter o una palabra en un string y nos retorna la posicion en la que se encuentra o -1 si no lo encuentra
console.log(nombre.indexOf("a")); // 1

// 4. Metodo lastIndexOf()
// Nos permite buscar un caracter o una palabra en un string y nos retorna la posicion en la que se encuentra o -1 si no lo encuentra, pero en este caso busca de derecha a izquierda
console.log(nombre.lastIndexOf("a")); // 2

// 5. Metodo replace()
// Nos permite reemplazar un caracter o una palabra en un string por otra
console.log(nombre.replace("a", "e")); // Geem

// 6. Metodo slice()
// Nos permite cortar un string desde una posicion inicial hasta una posicion final
console.log(nombre.slice(0, 2)); // Ge

// 7. Metodo substr()
// Nos permite cortar un string desde una posicion inicial y una cantidad de caracteres
console.log(nombre.substr(0, 1)); // G

// 8. Metodo split()
// Nos permite separar un string en un array de strings
console.log(nombre.split("")); // [ 'G', 'e', 'a', 'm' ]

// 9. Metodo toLowerCase()
// Nos permite convertir un string a minusculas
console.log(nombre.toLowerCase()); // geam

// 10. Metodo toUpperCase()
// Nos permite convertir un string a mayusculas
console.log(nombre.toUpperCase()); // GEAM

// 11. Metodo trim()
// Nos permite eliminar los espacios en blanco de un string al inicio y al final
let nombreCompleto = " Geam Jaramillo ";
console.log(nombreCompleto.trim()); // Geam Jaramillo

// 12. Metodo includes()
// Nos permite buscar un caracter o una palabra en un string y nos retorna true o false
console.log(nombre.includes("a")); // true

// 13. Metodo length()
// Nos permite saber la longitud de un string
console.log(nombre.length); // 4


