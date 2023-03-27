using System;
namespace EstructuraDatos
{
  class Program
  {
    static void Main(string[] arg)
    {
      // Estructuras de datos
      // Son formas de almacenar y organizar datos para su posterior uso
      // Las estructuras de datos son una forma de organizar los datos para que puedan ser utilizados de manera eficiente

      // Array
      // Es una estructura de datos que nos permite almacenar varios datos de un mismo tipo

      // Sintaxis
      // TipoDato[] nombreArray = new TipoDato[tamañoArray];

      int[] numeros = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
      COnsole.WriteLine(numeros);

      string[] nombres = { "Javier", "Geam", "Gabriel", "Leonel" };
      Console.WriteLine(nombres);

      // Para acceder a un elemento del array, se debe indicar el indice del elemento
      Console.WriteLine(numeros[0]);

      // Para modificar un elemento del array, se debe indicar el indice del elemento
      numeros[0] = 100;
      Console.WriteLine(numeros[0]);

      // Metodos de los arrays en C#
      // Length
      // Nos permite obtener el tamaño del array
      Console.WriteLine(numeros.Length);

      // Sort
      // Nos permite ordenar los elementos del array
      Console.WriteLine(numeros.Sort());

      // Reverse
      // Nos permite invertir los elementos del array
      Console.WriteLine(numeros.Reverse());

      // Clear
      // Nos permite limpiar los elementos del array
      Console.WriteLine(numeros.Clear());

      // GetValue
      // Nos permite obtener el valor de un elemento del array
      Console.WriteLine(numeros.GetValue(0));

      // SetValue
      // Nos permite modificar el valor de un elemento del array
      Console.WriteLine(numeros.SetValue(0, 100));

      // List
      // Es una estructura de datos que nos permite almacenar varios datos de un mismo tipo

      // Sintaxis
      // List<TipoDato> nombreLista = new List<TipoDato>("elemento1", "elemento2", "elemento3");

      List<int> numeros = new List<int>(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
      Console.WriteLine(numeros);

      List<string> nombres = new List<string>("Javier", "Geam", "Gabriel", "Leonel");
      Console.WriteLine(nombres);


      // Para acceder a un elemento de la lista, se debe indicar el indice del elemento
      Console.WriteLine(numeros[0]);
      
      // Para modificar un elemento de la lista, se debe indicar el indice del elemento
      numeros[0] = 100;
      Console.WriteLine(numeros[0]);

      // Metodos de las listas en C#
      // Count
      // Nos permite obtener el tamaño de la lista
      Console.WriteLine(numeros.Count);

      // Sort
      // Nos permite ordenar los elementos de la lista
      Console.WriteLine(numeros.Sort());

      // Reverse
      // Nos permite invertir los elementos de la lista
      Console.WriteLine(numeros.Reverse());

      // Clear
      // Nos permite limpiar los elementos de la lista
      Console.WriteLine(numeros.Clear());

      // Add
      // Nos permite agregar un elemento a la lista
      Console.WriteLine(numeros.Add(100));

      // Remove
      // Nos permite eliminar un elemento de la lista
      Console.WriteLine(numeros.Remove(100));

      // RemoveAt
      // Nos permite eliminar un elemento de la lista por su indice
      Console.WriteLine(numeros.RemoveAt(0));

      // RemoveRange
      // Nos permite eliminar un rango de elementos de la lista
      Console.WriteLine(numeros.RemoveRange(0, 5));

      // Insert
      // Nos permite insertar un elemento en la lista
      Console.WriteLine(numeros.Insert(0, 100));


      // Dictionary
      // Es una estructura de datos que nos permite almacenar varios datos de un mismo tipo, pero con una clave para identificarlos

      // Sintaxis
      // Dictionary<TipoDatoClave, TipoDatoValor> nombreDiccionario = new Dictionary<TipoDatoClave, TipoDatoValor>("clave1", "valor1", "clave2", "valor2", "clave3", "valor3");

      Dictionary<int, string> diccionario = new Dictionary<int, string>(1, "Javier", 2, "Geam", 3, "Gabriel", 4, "Leonel");
      Console.WriteLine(diccionario);

      // Para acceder a un elemento del diccionario, se debe indicar la clave del elemento
      Console.WriteLine(diccionario[1]);

      // Para modificar un elemento del diccionario, se debe indicar la clave del elemento
      diccionario[1] = "Javier";

      // Metodos de los diccionarios en C#
      // Count
      // Nos permite obtener el tamaño del diccionario
      Console.WriteLine(diccionario.Count);

      // Clear
      // Nos permite limpiar los elementos del diccionario
      Console.WriteLine(diccionario.Clear());

      // Add
      // Nos permite agregar un elemento al diccionario
      Console.WriteLine(diccionario.Add(5, "Javier"));

      // Remove
      // Nos permite eliminar un elemento del diccionario
      Console.WriteLine(diccionario.Remove(5));

      // RemoveAt
      // Nos permite eliminar un elemento del diccionario por su indice
      Console.WriteLine(diccionario.RemoveAt(0));

      // RemoveRange
      // Nos permite eliminar un rango de elementos del diccionario
      Console.WriteLine(diccionario.RemoveRange(0, 5));

      // Insert
      // Nos permite insertar un elemento en el diccionario, pero no se puede indicar la clave del elemento a insertar ya que esta se genera automaticamente por el diccionario y es un numero entero que comienza en 0 y aumenta de 1 en 1
      Console.WriteLine(diccionario.Insert(0, 100));

      // ContainsKey
      // Nos permite verificar si un elemento existe en el diccionario por su clave
      Console.WriteLine(diccionario.ContainsKey(1));

      // ContainsValue
      // Nos permite verificar si un elemento existe en el diccionario por su valor
      Console.WriteLine(diccionario.ContainsValue("Javier"));

      // Keys
      // Nos permite obtener las claves del diccionario
      Console.WriteLine(diccionario.Keys);

      // Values
      // Nos permite obtener los valores del diccionario
      Console.WriteLine(diccionario.Values);
    }
  }
}

