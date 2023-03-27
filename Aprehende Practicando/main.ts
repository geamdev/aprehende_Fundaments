// Realiza un programa que pida por consola nombre, edad, ciudad y luego muestra esa información separado por comas (utiliza las 5 formas de formatear un texto).

const pedirInformacion = ():void => {
  let nombre: string | null = prompt('Ingrese su nombre: ');
  let edad: number | string | null = prompt('Ingrese su edad: ');
  edad = Number(edad)
}

// Realiza un programa que pida al usuario dos números enteros y realice las operaciones aritméticas básicas, suma, resta, multiplicación y división luego muestra por pantalla de forma ordenada. 




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



// Realizar un programa que permita registrar un usuario, con nombre de usuario, correo y contraseña; esos datos almacenar en la estructura de datos de su preferencia(lo más óptimo sería usar un diccionario, pero con cualquiera es posible ), apenas termine de registrar le permitirá registrar otros usuarios, el programa siempre deberá comprobar a la estructura de datos si el usuario o el email existen, si es así le indicará al usuario que ya existe y le pedirá que ingrese otro usuario o email.
// Reglas: 
// 1 EL nombre de usuario se debe guardar en mayúsculas (No importa si el usuario lo escribe con minúsculas)
// 2 El correo antes de guardarlo debe ser comprobado que cumple una estructura de correo es decir que contiene un @ y un .
// 3 La contraseña solo puede ser máx de 6 dígitos