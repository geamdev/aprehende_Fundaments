// El formateo nos permite agilizar la forma de escribir una cadena de texto, existe varias formas de escribir estos formatos, ya depende de ti adaptarte al que mas te agrade.
// Concatenacion

const nombre: string = 'Geam';
const apellido: string = 'Jaramillo';
const edad: number = 18;
const sueldo: number = 500.00;

console.log('Hola ' + nombre + ' ' + apellido + ' tienes ' + edad + ' años y tu sueldo es de ' + sueldo);

// Template String la que mas me gusta
console.log(`Hola ${nombre}`);
console.log(`Hola ${nombre} ${apellido} tienes ${edad} años`);
console.log(`Hola ${nombre} ${apellido} tienes ${edad} años y tu sueldo es de ${sueldo}`)


const a: number = 12;
const b: number = 23;

console.log(`la suma de ${a} + ${b} es ${a + b}`);

