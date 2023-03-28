// Realiza un programa que pida por consola nombre, edad, ciudad y luego muestra esa información separado por comas (utiliza las 5 formas de formatear un texto).
using System;
using System.Collections.Generic;


namespace Exercise1
{
  class Program
  {
    static void Main(string[] arg)
    {
      Console.WriteLine("Ingrese su nombre");
      string nombre = Console.ReadLine();
      Console.WriteLine("Ingrese su edad");
      string edad = Console.ReadLine();
      Console.WriteLine("Ingrese su ciudad");
      string ciudad = Console.ReadLine();

      Console.WriteLine("Hola {0}, tienes {1} años y vives en {2}", nombre, edad, ciudad);
      Console.WriteLine("Hola " + nombre + ", tienes " + edad + " años y vives en " + ciudad);
      Console.WriteLine($"Hola {nombre}, tienes {edad} años y vives en {ciudad}");
      Console.WriteLine("Hola {0}, tienes {1} años y vives en {2}", nombre, edad, ciudad);
      Console.WriteLine("Hola {0}, tienes {1} años y vives en {2}", nombre, edad, ciudad);
    }
  }
}

// Realiza un programa que pida al usuario dos números enteros y realice las operaciones aritméticas básicas, suma, resta, multiplicación y división luego muestra por pantalla de forma ordenada. 

namespace Exercise2
{
  class Program
  {
    static void Main(string[] arg)
    {
      Console.WriteLine("Ingrese el primer numero: ");
      float num1 = float.Parse(Console.ReadLine());
      Console.WriteLine("Ingrese el segundo numero: ");
      float num2 = float.Parse(Console.ReadLine());

      Console.WriteLine("La suma de {0} + {1} es {2}", num1, num2, num1 + num2);
      Console.WriteLine("La resta de {0} - {1} es {2}", num1, num2, num1 - num2);
      Console.WriteLine("La multiplicacion de {0} * {1} es {2}", num1, num2, num1 * num2);
      if (num2 != 0)
      {
        Console.WriteLine("La division de {0} / {1} es {2}", num1, num2, num1 / num2);
      }
      else
      {
        Console.WriteLine("No se puede dividir entre 0");
      }
    }
  }
}


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

namespace Exercise3
{
  class Program
  {
    static void Main(string[] arg)
    {
      bool a = false;
      bool b = true;

      Console.WriteLine("AND");
      Console.WriteLine("{0} and {1} = {2}", a, a, a && a);
      Console.WriteLine("{0} and {1} = {2}", a, b, a && b);
      Console.WriteLine("{0} and {1} = {2}", b, a, b && a);
      Console.WriteLine("{0} and {1} = {2}", b, b, b && b);

      Console.WriteLine("OR");
      Console.WriteLine("{0} or {1} = {2}", a, a, a || a);
      Console.WriteLine("{0} or {1} = {2}", a, b, a || b);
      Console.WriteLine("{0} or {1} = {2}", b, a, b || a);
      Console.WriteLine("{0} or {1} = {2}", b, b, b || b);

      Console.WriteLine("NOT");
      Console.WriteLine("not {0} = {1}", a, !a);
      Console.WriteLine("not {0} = {1}", b, !b);
    }
  }
}

// Realizar un programa que permita registrar un usuario, con nombre de usuario, correo y contraseña; esos datos almacenar en la estructura de datos de su preferencia(lo más óptimo sería usar un diccionario, pero con cualquiera es posible ), apenas termine de registrar le permitirá registrar otros usuarios, el programa siempre deberá comprobar a la estructura de datos si el usuario o el email existen, si es así le indicará al usuario que ya existe y le pedirá que ingrese otro usuario o email.
// Reglas: 
// 1 EL nombre de usuario se debe guardar en mayúsculas (No importa si el usuario lo escribe con minúsculas)
// 2 El correo antes de guardarlo debe ser comprobado que cumple una estructura de correo es decir que contiene un @ y un .
// 3 La contraseña solo puede ser máx de 6 dígitos



namespace RegistroUsuarios
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, string> usuarios = new Dictionary<string, string>();

            while (true)
            {
                Console.WriteLine("Ingrese su nombre de usuario:");
                string nombreUsuario = Console.ReadLine().ToUpper();

                Console.WriteLine("Ingrese su correo:");
                string correo = Console.ReadLine();

                if (!correo.Contains("@") || !correo.Contains("."))
                {
                    Console.WriteLine("El correo no es válido");
                    continue;
                }

                Console.WriteLine("Ingrese su contraseña:");
                string contrasena = Console.ReadLine();

                if (contrasena.Length > 6)
                {
                    Console.WriteLine("La contraseña no puede ser mayor a 6 caracteres");
                    continue;
                }

                if (usuarios.ContainsKey(nombreUsuario))
                {
                    Console.WriteLine("El usuario ya existe");
                    continue;
                }

                usuarios.Add(nombreUsuario, correo);
                Console.WriteLine("Usuario registrado");

                Console.WriteLine("¿Desea registrar otro usuario? (S/N)");
                string respuesta = Console.ReadLine().ToUpper();

                if (respuesta != "S")
                {
                    break;
                }
            }
        }
    }
}