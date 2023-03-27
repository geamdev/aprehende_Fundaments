// Para imprimir en consola se usa Console.WriteLine("Texto a imprimir");

using System;

namespace Consola
{
  class Program
  {
    static void Main(string[] args)
    {
      Consolo.WriteLine("Hola mundo")
    }
  }
}

// Cuando estamos iniciando a aprender un lenguaje lo mas comun es entender sus funcionalidades, comportamientos y demas, interactuando con la consola. En C sharp la funcion predefinida que nos permite realizar dicha accion es Console.ReadLine(); 

// Cada vez que requerimos un dato por consola, este debe ser guardado en una variable.

// En C# lo hacemos de la siguiente manera

using System;

namespace Consola1
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Ingrese su nombre \n"); // Imprimimos en consola el texto que queremos que el usuario ingrese
      string nombre = Console.ReadLine(); // Guardamos el dato ingresado por el usuario en la variable nombre
    }
  }
}