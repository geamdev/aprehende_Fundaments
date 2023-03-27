// Para imprimir un mensaje por consola escribimos la función predefinida console.log() y entre paréntesis el mensaje que queremos imprimir.

console.log("Hola mundo");

// Cuando estamos iniciando a aprender un lenguaje lo mas comun es entender sus funcionalidades, comportamientos y demas, interactuando con la consola. En JS la funcion que nos permite realizar dicha accion es prompt().

// Cada vez que requerimos un dato por consola, este debe ser guardado en una variable.

// Dentro de la funcion prompt() si lo deseamos podemos colocar un mensaje que nos permita entender que dato estamos pidiendo por consola.

// El consola el puntero se colocará justo después de la frase insertada en la función input así que lo recomendable sería dejar un espacio luego de la frace o utilizar el caracter especial \n que generará un salto de linea en la consola.

const sinEspacio = prompt("Cual es tu nombre?");
const conEspacio = prompt("Cual es tu nombre?");
const conSalto = prompt("Cual es tu nombre? \n");

prompt("Cual es tu nombre?"); // Sin asignar a una variable, por lo tanto no podremos utilizarlo en el futuro.
prompt() // Si no colocamos nada dentro de la funcion prompt() la consola nos pedirá un dato pero no nos mostrara un mensaje.

// Otra forma de utilizar esta funcion es despues de un print()
console.log("Cual es tu nombre?");
const nombre = prompt();

// De esta manera la impresion del mensaje y la petición del dato se realizará de forma separada y se evita utilizar el caracter especial \n.