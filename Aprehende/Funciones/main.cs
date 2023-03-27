using System;
namespace Funciones
{
  class Program
  {
    static void Main(string[] arg)
    {
      Saludo();

      int resultado = Suma(2,3);
      Console.WriteLine(resultado);
    }

    static void Saludo()
    {
      Console.WriteLine("Hello Word");
    }

    // A las funciones se les pueden pasar argumentos al momento de utilizar la función e internamente utilizarlos como parámetros que realizen una operación o funcionaidad deseada
    static int Suma(int a, int b)
    {
      int resultado = a + b;
      return resultado;
    }
  }
}