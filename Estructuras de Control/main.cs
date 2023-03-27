using System;

namespace EstructurasControl
{
  class Program
  {
    static void Main(string[] arg)
    {
      // Las estructuras de control nos ayudan a definir un camino en nuestro programa y poder responder a las preguntas necesarias Que pasa si el usuario hace esto? esto nos permitira tener un control y hacer que nuestro programa responda de una u otra manera dependiendo de acciones previas.

      // if
      // sintaxis

      @"""
        if (condicion)
        {
          // Codigo
        }
      """

      // El contenido se mostrara siempre y cuando la condicion sea verdadera
      if (true)
      {
        Console.WriteLine("La condicion es verdadera");
      }

      if (false)
      {
        Console.WriteLine("No se mostrara porque la condicion es falsa");
      }

      // else
      // Para refererirnos a que sucede si la condicion no se cumple usamos else

      if (true)
      {
        Console.WriteLine("La condicion es verdadera");
      }
      else
      {
        Console.WriteLine("La condicion es falsa");
      }

      // Utilizamos operadores condicionales en la condicion

      if (5 > 3)
      {
        Console.WriteLine("La condicion es verdadera");
      }
      else
      {
        Console.WriteLine("La condicion es falsa");
      }

      // Utilizando operadores logicos en la condicion

      if (5 > 3 && 2 > 10)
      {
        Console.WriteLine("La condicion es verdadera");
      }
      else
      {
        Console.WriteLine("La condicion es falsa");
      }

      if (5 > 3 || 2 > 10)
      {
        Console.WriteLine("La condicion es verdadera");
      }
      else
      {
        Console.WriteLine("La condicion es falsa");
      }

      // Utilizando variables dentro de la condicion
      byte a = 5;
      byte b = 10;
      bool x = a >= b;
      bool y = a == b;

      if (x && y)
      {
        Console.WriteLine("La condicion es verdadera");
      }
      else
      {
        Console.WriteLine("La condicion es falsa");
      }

      // else if
      // Podemos agregar mas condiciones a nuestra condicion inicial

      var numero = Console.ReadLine("Ingrese un numero del 1 al 5: ");

      if (numero == 1)
      {
        Console.WriteLine("El numero es 1");
      }
      else if (numero == 2)
      {
        Console.WriteLine("El numero es 2");
      }
      else if (numero == 3)
      {
        Console.WriteLine("El numero es 3");
      }
      else if (numero == 4)
      {
        Console.WriteLine("El numero es 4");
      }
      else if (numero == 5)
      {
        Console.WriteLine("El numero es 5");
      }
      else
      {
        Console.WriteLine("El numero no esta entre 1 y 5");
      }

    }
  }
}

