using System;

namespace Types
{
  class Program
  {
    static void Main(string[] args)
    {
      // A lo largo de la historia de los lenguajes de programación se han definido una variedad de tipos de datos para llegar a ser precisos en el la función principal de un programa, que es el procesamiento de información. En C sharp los tipos de datos son los siguientes:

      // Tipos de datos primitivos

      // sbyte (Signed Byte) -128 a 127
      sbyte numero1 = 127;
      Console.WriteLine(numero1.GetType());

      // byte (Unsigned Byte) 0 a 255
      byte numero2 = 255;
      Console.WriteLine(numero2.GetType());

      // short (Signed Short) -32,768 a 32,767
      short numero3 = 32767;
      Console.WriteLine(numero3.GetType());

      // ushort (Unsigned Short) 0 a 65,535
      ushort numero4 = 65535;
      Console.WriteLine(numero4.GetType());

      // int (Signed Int) -2,147,483,648 a 2,147,483,647
      int numero5 = 2147483647;
      Console.WriteLine(numero5.GetType());

      // uint (Unsigned Int) 0 a 4,294,967,295
      uint numero6 = 4294967295;
      Console.WriteLine(numero6.GetType());

      // long (Signed Long) -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807
      long numero7 = 9223372036854775807;
      Console.WriteLine(numero7.GetType());

      // ulong (Unsigned Long) 0 a 18,446,744,073,709,551,615
      ulong numero8 = 18446744073709551615;
      Console.WriteLine(numero8.GetType());

      // float (Single Precision) 1.5 x 10-45 a 3.4 x 1038
      float numero9 = 3.402823E+38F;
      Console.WriteLine(numero9.GetType());

      // double (Double Precision) 5.0 x 10-324 a 1.7 x 10308
      double numero10 = 1.7976931348623157E+308;
      Console.WriteLine(numero10.GetType());

      // decimal (Decimal Precision) 1.0 x 10-28 a 7.9 x 1028
      decimal numero11 = 79228162514264337593543950335M;
      Console.WriteLine(numero11.GetType());

      // char (Character) 0 a 65,535
      char caracter = 'a';
      Console.WriteLine(caracter.GetType());

      // bool (Boolean) true o false
      bool booleano = true;
      Console.WriteLine(booleano.GetType());

      // Tipos de datos no primitivos

      // object (Object) 
      // Es el tipo de dato mas general, es decir, es el padre de todos los tipos de datos, por lo tanto, cualquier tipo de dato puede ser convertido a object
      object objeto = "Hola mundo";
      Console.WriteLine(objeto.GetType());

      // string (String)
      // Es un tipo de dato que representa una secuencia de caracteres, es decir, es un arreglo de caracteres
      string cadena = "Hola mundo";
      Console.WriteLine(cadena.GetType());

      // dynamic (Dynamic)
      // Es un tipo de dato que representa una variable que puede cambiar de tipo en tiempo de ejecución
      dynamic dinamico = "Hola mundo";
      Console.WriteLine(dinamico.GetType());

      

    }
  }
}