#El manejo de exepciones es un concepto que nos permite tener el control total de nuestro software, habrá momentos en el que no sabremos lo que el usuario nos dará como dato, o en el caso de python por ser dinámico puede cambiar el tipo de dato en cualquier momento y romper el flujo normal del software y producir un error, por ello el manejo de exepciones se hace presente y nos ayuda a solventar esos posibles errores que pueden que se den o no en nuestro software.
#Para ello utilizamos las palabras reservadas try, except
'''
  sintaxis
  try:
    contenido normal
  except:
    contenido en caso de que exista un error
  finally:
    contenido que siempre se va a ejcutar exista o no exista un error
'''

try:
  dividendo = float(input("Ingrese dividendo: "))
  divisor = float(input("Ingrese divisor: "))
  division = dividendo / divisor
  print(division)
except ZeroDivisionError:
  print("No se puede dividir para 0")
except ValueError:
  print("Porfavor inserte un número")
finally:
  print("Siempre se va a ejecutar")

print("******************************")
print("El código sigue y sigue")