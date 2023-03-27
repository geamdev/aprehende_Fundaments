using System;
namespace Excepciones
{
  class Program
  {
    static void Main(string[] arg)
    {
      // la estructura try-catch-finally se utiliza para controlar las excepciones que se puedan producir durante la ejecución del código y poder manejarlas de forma adecuada para evitar que el programa termine abruptamente.
      try
      {
        int dividendo = 10;
        int divisor = 0;

        if (divisor == 0)
        {
            throw new DivideByZeroException("No se puede dividir por cero");
        }

        int resultado = dividendo / divisor;
        Console.WriteLine(resultado);
      }
      catch (DivideByZeroException er)
      {
          Console.WriteLine("Error: " + er.Message);
      }
      finally
      {
          Console.WriteLine("Este mensaje siempre se mostrará.");
      }
    }
  }
}