// Realiza un programa que pida por consola nombre, edad, ciudad y luego muestra esa información separado por comas (utiliza las 5 formas de formatear un texto).

import * as readline from 'readline';

const obtenerInformacion = (): void => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('¿Cuál es tu nombre? ', (nombre: string) => {
    rl.question('¿Cuál es tu edad? ', (edad: string) => {
      rl.question('¿Cuál es tu ciudad? ', (ciudad: string) => {
        console.log(`${nombre}, ${edad}, ${ciudad}`);
        rl.close();
      });
    });
  });
};

// obtenerInformacion();




// Realiza un programa que pida al usuario dos números enteros y realice las operaciones aritméticas básicas, suma, resta, multiplicación y división luego muestra por pantalla de forma ordenada. 

const pedirNumeros = (): void => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Ingrese el primer número: ', (num1: string) => {
    rl.question('Ingrese el segundo número: ', (num2: string) => {
      const resultadoSuma = parseInt(num1) + parseInt(num2);
      const resultadoResta = parseInt(num1) - parseInt(num2);
      const resultadoMultiplicacion = parseInt(num1) * parseInt(num2);
      const resultadoDivision = parseInt(num1) / parseInt(num2);
      
      console.log(`La suma de ${num1} + ${num2} es ${resultadoSuma}`);
      console.log(`La resta de ${num1} - ${num2} es ${resultadoResta}`);
      console.log(`La multiplicación de ${num1} * ${num2} es ${resultadoMultiplicacion}`);
      if (parseInt(num2) === 0) {
        console.log('No se puede dividir por cero');
      } else {
        console.log(`La división de ${num1} / ${num2} es ${resultadoDivision}`);
      }
      rl.close();
    });
  });
};
// pedirNumeros();




// Realiza un programa que me muestre por pantalla la tabla de verdad de los 3 operadores lógicos. ( Utiliza variables, no coloques el valor directamente en el Print )
// Debería quedar así:
// 					AND
// False and False = False
// False and True = False
// True and False = False
// True and True = True
// OR
// False or False = False
// False or True = True
// True or False = True
// True or True = True
// NOT
// not False = True
// not True = False

const mostrarTablaVerdad = (): void => {
  const a: boolean = true;
  const b: boolean = false;
  console.log('AND');
  console.log(`${a} and ${a} = ${a && a}`);
  console.log(`${a} and ${b} = ${a && b}`);
  console.log(`${b} and ${a} = ${b && a}`);
  console.log(`${b} and ${b} = ${b && b}`);
  console.log('OR');
  console.log(`${a} or ${a} = ${a || a}`);
  console.log(`${a} or ${b} = ${a || b}`);
  console.log(`${b} or ${a} = ${b || a}`);
  console.log(`${b} or ${b} = ${b || b}`);
  console.log('NOT');
  console.log(`not ${a} = ${!a}`);
  console.log(`not ${b} = ${!b}`);
  
};

// mostrarTablaVerdad();


// Realizar un programa que permita registrar un usuario, con nombre de usuario, correo y contraseña; esos datos almacenar en la estructura de datos de su preferencia(lo más óptimo sería usar un diccionario, pero con cualquiera es posible ), apenas termine de registrar le permitirá registrar otros usuarios, el programa siempre deberá comprobar a la estructura de datos si el usuario o el email existen, si es así le indicará al usuario que ya existe y le pedirá que ingrese otro usuario o email.
// Reglas: 
// 1 EL nombre de usuario se debe guardar en mayúsculas (No importa si el usuario lo escribe con minúsculas)
// 2 El correo antes de guardarlo debe ser comprobado que cumple una estructura de correo es decir que contiene un @ y un .
// 3 La contraseña solo puede ser máx de 6 dígitos


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Estructura de datos para almacenar los usuarios
const usuarios: { [key: string]: { correo: string, contrasena: string } } = {};


// Función para validar el correo electrónico
function validarCorreo(correo: string): boolean {
  const expReg = /\S+@\S+\.\S+/;
  return expReg.test(correo);
}

// Función para validar la contraseña
function validarContrasena(contrasena: string): boolean {
  return contrasena.length <= 6;
}

// Función para registrar un usuario
function registrarUsuario(): void {
  rl.question('Ingrese su nombre de usuario: ', (nombreUsuario: string) => {
    // Convertir el nombre de usuario a mayúsculas
    nombreUsuario = nombreUsuario.toUpperCase().trim();

    // Verificar si el nombre de usuario ya existe
    if (usuarios[nombreUsuario]) {
      console.log('El usuario ya existe, ingrese otro nombre de usuario.');
      registrarUsuario();
    } else {
      rl.question('Ingrese su correo electrónico: ', (correo: string) => {
        // Verificar si el correo electrónico es válido
        if (!validarCorreo(correo)) {
          console.log('El correo electrónico no es válido, ingrese otro correo.');
          registrarUsuario();
        } else if (Object.values(usuarios).some(user => user.correo === correo)) {
          console.log('El correo electrónico ya existe, ingrese otro correo.');
          registrarUsuario();
        } else {
          rl.question('Ingrese su contraseña (máx. 6 dígitos): ', (contrasena: string) => {
            // Verificar si la contraseña es válida
            if (!validarContrasena(contrasena)) {
              console.log('La contraseña no es válida, ingrese otra contraseña.');
              registrarUsuario();
            } else {
              // Almacenar el usuario en la estructura de datos
              usuarios[nombreUsuario] = { correo, contrasena };
              console.log('Usuario registrado exitosamente!');
              rl.question('Desea registrar otro usuario? (S/N) ', (respuesta: string) => {
                if (respuesta.toUpperCase() === 'S') {
                  registrarUsuario();
                } else {
                  rl.close();
                }
              });
            }
          });
        }
      });
    }
  });
}

// Iniciar el proceso de registro de usuario
registrarUsuario();



