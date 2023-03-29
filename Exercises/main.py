# ¡La nueva película de "Vengadores" acaba de ser lanzada! Hay mucha gente en la taquilla del cine en una fila enorme. Cada uno de ellos tiene un solo billete de 100, 50 o 25 dólares. Un boleto de "Los Vengadores" cuesta 25 dólares.
# Vania trabaja actualmente como empleada y ella quiere vender un boleto a cada persona en la fila.
# ¿Podrá Vania vender un boleto a cada persona y dar cambio/vuelto si inicialmente no tiene dinero y vende los boletos estrictamente en el orden de la cola de personas?
# Regresa SI, si Vania puede vender un boleto a cada persona y dar cambio/vuelto con el dinero que tiene a la mano en ese momento. De lo contrario, devuelva NO.
# Ejemplo:
# tickets([25, 25, 50]) // => SI
# tickets([25, 100]) // => NO. Vania no tendra suficiente dinero para dar cambio/vuelto a los 100 dolares
# tickets([25, 25, 50, 50, 100]) // => NO. Vania no tendra suficiente dinero para dar 75 dolares de cambio/vuelto (no puedes crear dos billetes de 25 a partir de un billete de 50)

def procesar_ticket_50(dinero):
  if 25 in dinero:
    dinero.remove(25)
    dinero.append(50)
    return "SI"
  else:
    return "NO"

def procesar_ticket_100(dinero):
  if 25 in dinero and 50 in dinero:
    dinero.remove(25)
    dinero.remove(50)
    dinero.append(100)
    return "SI"
  elif dinero.count(25) >= 3:
    for i in range(3):
      dinero.remove(25)
    dinero.append(100)
    return "SI"
  else:
    return "NO"


def gente(tickets):
  dinero = []
  for ticket in tickets:
    if ticket == 25:
      dinero.append(ticket)
    elif ticket == 50:
      res = procesar_ticket_50(dinero)
      if res == "NO":
        return "NO"
    elif ticket == 100:
      res = procesar_ticket_100(dinero)
      if res == "NO":
        return "NO"
  return "SI"


print(gente([25, 25, 50])) # => SI

print(gente([25, 100])) # => NO

print(gente([25, 25, 50, 50, 100])) # => NO

print(gente([100, 25, 50])) # => NO

print(gente([25, 25, 50, 100])) # => SI

print(gente([25, 25, 25, 25, 25, 100, 100]))  # => NO

print(gente([25, 25, 25, 25, 25, 100, 50, 100]))  # => SI

print(gente([25, 25, 25, 25, 25, 100, 100, 100]))  # => NO


