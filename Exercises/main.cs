using System;
using System.Collections.Generic;
using System.Linq;

class Program {
    static void Main() {
    Console.WriteLine(Gente(new List<int>{25, 25, 50})); // => SI
    Console.WriteLine(Gente(new List<int>{25, 100})); // => NO
    Console.WriteLine(Gente(new List<int>{25, 25, 50, 50, 100})); // => NO
    Console.WriteLine(Gente(new List<int>{100, 25, 50})); // => NO
    Console.WriteLine(Gente(new List<int>{25, 25, 50, 100})); // => SI
    Console.WriteLine(Gente(new List<int>{25, 25, 25, 25, 25, 100, 100})); // => NO
    Console.WriteLine(Gente(new List<int>{25, 25, 25, 25, 25, 100, 50, 100})); // => SI
    Console.WriteLine(Gente(new List<int>{25, 25, 25, 25, 25, 100, 100, 100})); // => NO
  }
  
  static bool ProcesarTicket50(List<int> dinero) {
    if (dinero.Contains(25)) {
      dinero.Remove(25);
      dinero.Add(50);
    return true;
    } else {
      return false;
    }
  }

  static bool ProcesarTicket100(List<int> dinero) {
      if (dinero.Contains(25) && dinero.Contains(50)) {
          dinero.Remove(25);
          dinero.Remove(50);
          dinero.Add(100);
          return true;
      } else if (dinero.Count(x => x == 25) >= 3) {
          for (int i = 0; i < 3; i++) {
              dinero.Remove(25);
          }
          dinero.Add(100);
          return true;
      } else {
          return false;
      }
  }

  static string Gente(List<int> tickets) {
      List<int> dinero = new List<int>();
      foreach (int ticket in tickets) {
          if (ticket == 25) {
              dinero.Add(ticket);
          } else if (ticket == 50) {
              if (!ProcesarTicket50(dinero)) {
                  return "NO";
              }
          } else if (ticket == 100) {
              if (!ProcesarTicket100(dinero)) {
                  return "NO";
              }
          }
      }
      return "SI";
  }
}