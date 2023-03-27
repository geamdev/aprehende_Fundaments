#Los ciclos en la programación son las funcionalidades más principales que nuestro software debe implementar, ya que nos permite iterar o repetir un proceso las veces que deseemos y de esta manera generar un software automatizado.
#En python existen dos tipos de ciclos que ralizan la misma función pero la implementación o la forma de abordar el problema es totalmente diferente en algunos casos es más eficiente utilizar uno u otro, aunque recalco con ámbos de puede hacer lo mismo.
#while
##El ciclo while es el más sencillo de entender ya que nos encasilla a pensar que mientras se cumpla alguna condición el ciclo se ejecutará.
'''
  sintaxis
  while condición:
    contenido
'''
##OBSERVACIÓN en la condición tal como hacemos con if, elif, else, debe siempre devolver o arrojar un booleano, es decir verdadero o falso

x = 0
while x < 10:
  print(x)
  x += 1

##Siempre es importante tener una variable global para que nos ayude a romper el ciclo

#Recordemos que en las operaciones lógicas tenemos Tue y False que representan a 1 y 0, teniendo en cuenta esto podríamos generar un ciclo o romperlo utilizando estos números
x = 1
contador = 0
while x:
  if contador < 10:
    contador += 1
    print(contador)
  else:
    x = 0

##Los ciclos tanto while y el for que veremos luego tienen unas palabras reservadas internas que solo funcionan dentro de un ciclo y son: continue y break
### continue: Nos permite saltarnos u obviar todo lo que esté después de esta palabra y seguir ejecutando el ciclo

x = 0
while x < 10:
  x += 1
  if x%2 == 0:
    print(x, "PAR")
    continue
  print(x, "IMPAR")

### break: Nos permite romper el ciclo cuando lo necesitemos

contador = 0
while True:
  if contador < 10:
    contador += 1
    print(contador)
  else:
   break

##FOR es un ciclo que en python una de sus funciones principales es la de iterar una estructura de datos, pero igual con el while se puede generar los mismo ejemplos

'''
  sintaxis
  for elemento in estructura de dato:
    contenido

  for número in range(número hasta donde hará el ciclo):
    contenido

  for indicie elemento in enumerate(estructura de control):
    contenido
'''
## iterando una estructura de control
lista = ["Joel", "Edgar", "Dennys", "Yuly", "Jordan"]

for nombre in lista:
  print(nombre)

## generando un range de ciclos

for i in range(5,20):
  print(i)

##obteniendo índice y elemento 

for k, v in enumerate(lista):
  print(k,v)

##RECORRIENDO UN DICCIONARIO

diccionario = {"nombre": "Joel", "apellido": "Gurumendi", "edad": 26}

for i in diccionario:
  print(diccionario[i])