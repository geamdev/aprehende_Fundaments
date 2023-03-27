using System;
namespace MetodosString
{
  class Program
  {
    static void Main(string[] args)
    {
      // Metodos de un string, nos permite modificar, acceder, eliminar, etc al contenido de un string retornando un nuevo string

      // 1. Length
      // Nos permite obtener la longitud de un string
      var nombre = "Geam";
      Console.WriteLine($"Texto: {nombre}"); // Geam
      Console.WriteLine($"La longitud de {nombre} es: {nombre.Length}"); // 4

      // 2. ToUpper
      // Nos permite convertir un string a mayusculas
      nombre = "geam";
      Console.WriteLine($"Texto: {nombre}"); // geam
      Console.WriteLine($"El string {nombre} en mayusculas es: {nombre.ToUpper()}"); // GEAM

      // 3. ToLower
      // Nos permite convertir un string a minusculas
      nombre = "GEAM";
      Console.WriteLine($"Texto: {nombre}"); // GEAM
      Console.WriteLine($"El string {nombre} en minusculas es: {nombre.ToLower()}"); // geam

      // 4. Trim
      // Nos permite eliminar los espacios en blanco al inicio y al final de un string
      nombre = " Geam   ";
      Console.WriteLine($"Texto: {nombre}"); // Geam 
      Console.WriteLine($"El string {nombre} sin espacios en blanco es: {nombre.Trim()}"); // Geam

      // 5. IndexOf
      // Nos permite obtener la posicion de un caracter en un string
      nombre = "Geam";
      Console.WriteLine($"Texto: {nombre}"); // Geam
      Console.WriteLine($"La posicion de la letra 'a' en el string {nombre} es: {nombre.IndexOf('a')}"); // 1

      // 6. Substring
      // Nos permite obtener un string a partir de una posicion inicial y una longitud
      nombre = "Geam";
      Console.WriteLine($"Texto: {nombre}"); // Geam
      Console.WriteLine($"El string {nombre} desde la posicion 1 y con una longitud de 2 es: {nombre.Substring(1, 2)}"); // ea

      // 7. Replace
      // Nos permite reemplazar un caracter por otro
      nombre = "Geam";
      Console.WriteLine($"Texto: {nombre}"); // Geam
      Console.WriteLine($"El string {nombre} reemplazando la letra 'a' por la letra 'o' es: {nombre.Replace('a', 'o')}"); // Geom
      
      // 8. Contains
      // Nos permite saber si un string contiene un caracter
      nombre = "Geam";
      Console.WriteLine($"Texto: {nombre}"); // Geam
      Console.WriteLine($"El string {nombre} contiene la letra 'a'?: {nombre.Contains('a')}"); // True

      // 9. StartsWith
      // Nos permite saber si un string comienza con un caracter
      nombre = "Geam";
      Console.WriteLine($"Texto: {nombre}"); // Geam
      Console.WriteLine($"El string {nombre} comienza con la letra 'G'?: {nombre.StartsWith('G')}"); // True

      // 10. EndsWith
      // Nos permite saber si un string termina con un caracter
      nombre = "Geam";
      Console.WriteLine($"Texto: {nombre}"); // Geam
      Console.WriteLine($"El string {nombre} termina con la letra 'm'?: {nombre.EndsWith('m')}"); // True

    }
  }
}