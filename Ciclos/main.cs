using System;

namespace Ciclos
{
  class Program
  {
    static void Main(string[] arg)
    {
      // While
      // La instrucción while comprueba una condición y ejecuta la instrucción o el bloque de instrucciones que aparece después de while. Comprueba repetidamente la condición, ejecutando esas instrucciones hasta que la condición sea false.
      int counter = 0;
      while (counter < 10)
      {
          Console.WriteLine($"Hello World! The counter is {counter}");
          counter++;
      }
      // For
      // funciona de la misma forma que el bucle while. La instrucción for consta de tres partes que controlan su funcionamiento.

      //La primera parte es el inicializador de for: int index = 0; declara que index es la variable de bucle y establece su valor inicial en 0.

      //La parte central es la condición de for: index < 10 declara que este bucle for debe continuar ejecutándose mientras que el valor del contador sea menor que diez.

      //La última parte es el iterador de for: index++ especifica cómo modificar la variable de bucle después de ejecutar el bloque que sigue a la instrucción for.

      for (int index = 0; index < 10; index++)
      {
          Console.WriteLine($"Hello World! The index is {index}");
      }
    }
  }  
}


