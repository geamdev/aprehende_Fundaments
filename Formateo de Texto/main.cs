// El formateo nos permite agilizar la forma de escribir una cadena de texto, existe varias formas de escribir estos formatos, ya depende de ti adaptarte al que mas te agrade.

using System;

namespace Text
{
  class Program
  {
    static void Main(string[] args)
    {
      var nombre = "Geam";
      var apellido = "Jaramillo";
      byte edad = 18;
      float sueldo = 500.00f;

      // Concatenacion
      Console.WriteLine("Hola" + nombre + apellido + " tienes " + edad + " años y tu sueldo es de " + sueldo);

      // Format
      Console.WriteLine("hola {0}", nombre);
      Console.WriteLine("Hola {0} {1} tienes {2} años", nombre, apellido, edad)
      Console.WriteLine("Hola {0} {1} tienes {2} años y tu sueldo es {3}", nombre, apellido, edad, sueldo);

      // Interpolacion la que mas me gusta
      Console.WriteLine($"Hola {nombre}")
      Console.WriteLine($"Hola {nombre} {apellido} tienes {edad} años")
      Console.WriteLine($"Hola {nombre} {apellido} tienes {edad} años y tu sueldo es {sueldo}")
      

      int num1 = 10;
      int num2 = 20;
      Console.WriteLine($"La suma de {num1} + {num2} es {num1 + num2}")
    }
  }
}