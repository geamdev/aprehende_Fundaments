using System;
namespace Operadores
{
  class Program
  {
    static void Main(string[] args)
    {
      // Los operadores son fundamentales en un lenguaje de programacion ya que nos permite modificar un dato o realizar una comparacion entre datos, direccionandolos por un camino logico

      // Aritmeticos
      // Estos operadores nos permiten realizar operaciones matematicas

      // Suma
      int suma = 2 + 2;
      Console.WriteLine($"La suma de 2 + 2 es: {suma}");

      // Resta
      int resta = 2 - 1;
      Console.WriteLine($"La resta de 2 - 1 es: {resta}");

      // Multiplicacion
      int multiplicacion = 2 * 2;
      Console.WriteLine($"La multiplicacion de 2 * 2 es: {multiplicacion}");

      // Division
      // Si el resultado de la division es un numero decimal, el tipo de dato debe ser decimal para que el resultado sea un numero decimal y los valores de la division sean decimales
      decimal division = 7m / 2m;
      Console.WriteLine($"La division de 7 / 2 es: {division}");

      // Modulo
      // Este operador nos permite obtener el residuo de una division
      int modulo = 2 % 2;
      Console.WriteLine($"El modulo de 2 % 2 es: {modulo}");

      // Division entera
      // Si deseamos que el resultado sea un numero entero, el tipo de dato debe ser int para que el resultado sea un numero entero
      int divisionEntera = 14 / 3; 
      Console.WriteLine($"La division entera de 14 / 3 es: {divisionEntera}");

      // Potencia
      int potencia = 2 ^ 2;
      Console.WriteLine($"La potencia de 2 ^ 2 es: {potencia}");

      // Comparacion
      // Estos operadores como ddice su nombre nos permiten comparar dos o mas valores entre si y siempre nos devolvera un valor booleano es decir True o False

      // Igual que
      bool igualQue = 8 == 7;
      Console.WriteLine($"8 == 7 es: {igualQue}");
      igualQue = "Hola" == "Hola";
      Console.WriteLine($"'Hola' == 'Hola' es: {igualQue}");
      igualQue = "hola" == "Hola";
      Console.WriteLine($"'hola' == 'Hola' es: {igualQue}");

      // Diferente que
      bool diferenteQue = 8 != 5;
      Console.WriteLine($"8 != 5 es: {diferenteQue}");
      diferenteQue = 'Hola' != 'Hola';
      Console.WriteLine($"Hola != Hola es: {diferenteQue}");
      diferenteQue = "hola" != "Hola";
      Console.WriteLine($"hola != Hola es: {diferenteQue}");

      // Mayor
      bool mayor = 8 > 5;
      Console.WriteLine($"8 > 5 es: {mayor}");

      // Mayor o igual que
      bool mayorIgualQue = 8 >= 5;
      Console.WriteLine($"8 >= 5 es: {mayorIgualQue}");

      // Menor
      bool menor = 8 < 5;
      Console.WriteLine($"8 < 5 es: {menor}");
      
      // Menor o igual que
      bool menorIgualQue = 8 <= 5;
      Console.WriteLine($"8 <= 5 es: {menorIgualQue}");

      // Asignacion
      // Igual =
      int numero = 5;
      Console.WriteLine($"El valor de la variable numero es: {numero}");

      // Incremento 
      Console.WriteLine(numero = numero + 2);
      Console.WriteLine(numero+=2);

      // Decremento
      Console.WriteLine(numero = numero - 1);
      Console.WriteLine(numero-=2);

      // Multiplicacion *=
      Console.WriteLine(numero = numero * 2);
      Console.WriteLine(numero*=2);

      // Division /=
      Console.WriteLine(numero = numero / 2);
      Console.WriteLine(numero/=2);

      // Modulo %=
      Console.WriteLine(numero = numero % 2);
      Console.WriteLine(numero%=2);

      // Potencia ^=
      Console.WriteLine(numero = numero ^ 2);
      Console.WriteLine(numero^=2);

      // Division entera 
      // Una de las maneras es crear una variable de tipo float y dividir el numero por un valor decimal y asi el resultado sera un numero decimal
      float resultado = numero / 2f;
      Console.WriteLine(resultado);

      // Logicos 
      // Para entender a la perfeccion este tipo de operadores hay que primero comprender sus condiciones y respecticas tablas de verdad

      // AND
      bool and = true && true;
      Console.WriteLine($"true && true es: {and}");

      // OR
      bool or = true || false;
      Console.WriteLine($"true || false es: {or}");

      // NOT
      bool not = !true;
      Console.WriteLine($"!true es: {not}");

      // Especiales
      // Estos operadores son especiales ya que son usados para operaciones con verificacion avanzada

      // IS
      // Este operador nos permite verificar si un objeto es de un tipo especifico

      // IN
      // Este operador nos permite verificar si un objeto es parte de una coleccion esto lo veremos mas adelante

    }
  }
}