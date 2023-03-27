#Una de las utilidades principales de una función es la de encapsular un bloque de código y poder reutilizarlo en cualquier lugar de nuestro software
'''
  sintaxis
  def nombrefunción():
    contenido
'''
##Se utiliza la palabra reservada def, para referenciarse a la creación de una función

def hola():
  print("HOLA MUNDO")

hola()

##A las funciones se les pueden pasar argumentos al momento de utilizar la función e internamente utilizarlos como parámetros que realizen una operación o funcionaidad deseada

def suma(num1, num2):
  suma = num1 + num2
  print(f"La suma de {num1} + {num2} = {suma}")

suma(5,8)

##Generalmente las funciones solamente realizan la operación o la función necesario y devuelven un resultado, para que en otra parte del código podamos utilizar dicho resulto, para ello utilizamos la palabra reservada return

def suma(num1, num2):
  suma = num1 + num2
  return suma

resultado = suma(5,8)
print(resultado)

##La palabra reservada args nos permite insertar una cantidad variable de argumentos en una función, e internamente esos parámetros los toma como una tupla, entonces hay que tener en cuenta que para acceder a ellos hay que iterarlos o acceder mediante índices

def suma(*args):
  suma = 0
  for i in args:
    suma += i
  return suma

print(suma(5,8,9,10))

##La palabra reservada kwargs igual que args nos permite ingresar cantidad variable de argumentos pero de tipo llave: valor esto quiere decir que los atributos son tomado como un diccionario

def mostrar(**kwargs):
  for k in kwargs:
    print(k, "-->", kwargs[k])

mostrar(a = 1, b= 2, c= 3, d= 4)

##Valores por defecto en una función

def suma(num1 = 2, num2 = 2):
  suma = num1 + num2
  return suma

print(suma())