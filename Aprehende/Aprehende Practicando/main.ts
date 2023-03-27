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
  console.log('AND');
  let an = false && false;
  console.log(`False and False = ${an}`);
  an = false && true;
  console.log(`False and True = ${an}`);
  an = true && false;
  console.log(`True and False = ${an}`);
  an = true && true;
  console.log(`True and True = ${an}`);
  console.log('OR');
  let or = false || false;
  console.log(`False or False = ${or}`);
  or = false || true;
  console.log(`False or True = ${or}`);
  or = true || false;
  console.log(`True or False = ${or}`);
  or = true || true;
  console.log(`True or True = ${or}`);
  console.log('NOT');
  let not = !false;
  console.log(`not False = ${not}`);
  not = !true;
  console.log(`not True = ${not}`);
};

// mostrarTablaVerdad();


// Realizar un programa que permita registrar un usuario, con nombre de usuario, correo y contraseña; esos datos almacenar en la estructura de datos de su preferencia(lo más óptimo sería usar un diccionario, pero con cualquiera es posible ), apenas termine de registrar le permitirá registrar otros usuarios, el programa siempre deberá comprobar a la estructura de datos si el usuario o el email existen, si es así le indicará al usuario que ya existe y le pedirá que ingrese otro usuario o email.
// Reglas: 
// 1 EL nombre de usuario se debe guardar en mayúsculas (No importa si el usuario lo escribe con minúsculas)
// 2 El correo antes de guardarlo debe ser comprobado que cumple una estructura de correo es decir que contiene un @ y un .
// 3 La contraseña solo puede ser máx de 6 dígitos



