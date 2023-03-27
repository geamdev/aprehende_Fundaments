#Las estructuras de control nos ayudan a definir un camino en nuestro programa y poder responder a las preguntas necesarias ¿Qué pasa si el usuario hace esto? esto nos permitirá tener un control y hacer que nuestro programa respunda de una u otra manera dependiendo de acciones previas.
#if
##sintaxis
'''
  if condición :
    contenido
'''
##El contenido se mostrará siempre y cuando la condición sea verdadera.

if True :
  print("La condición es verdadera")

if False :
  print("No se mostrará porque la condición es falsa")

##Para referirnos a que sucede si la condición no se cumple utilizamos la sentencia else

if True :
  print("La condición es verdadera")
else:
  print("La condición es Falsa")

if False :
  print("La condición es verdadera")
else:
  print("La condición es Falsa")

##Utilzando operadores condicionales en la condición

if 5 > 3:
  print("La condición es verdadera")
else:
  print("La condición es Falsa")

##Utilizando operadores lógicos en la condición

if 5 > 3 and 2 < 10 :
  print("La condición es Verdadera")
else:
  print("La condición es Falsa")

if 5 > 3 or 2 > 10 :
  print("La condición es Verdadera")
else:
  print("La condición es Falsa")

##Utilizando variables dentro de la condición

a = 5
b = 10
x = a <= b
y = a == b

if x and y :
  print("La condición es Verdadera")
else:
  print("La condición es Falsa")

#elif
##La sentencia elif, nos permite realizar varias condiciones y la primera condición que se cumpla muestra el contenido del mismo

numero = int(input("Inserte un número del 1 - 5\n"))

if numero == 1:
  print("Ingresaste el número 1")
elif numero == 2:
  print("Ingresaste el número 2")
elif numero == 3:
  print("Ingresaste el número 3")
elif numero == 4:
  print("Ingresaste el número 4")
elif numero == 5:
  print("Ingresaste el número 5")
else:
  print("no ingresaste un número entre 1 - 5")