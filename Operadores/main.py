#Los Operadores son fundamental en un lenguaje de programación ya que nos permiten modificar un dato, o realizar una comparación entre datos, direccionandonos por un camino lógico.

#Aritméticos
#Estos operadores nos permiten realizar operaciones matemáticas.
##Suma
suma = 2+2
print("suma 2+2:",suma)
##Resta
resta = 5-3
print("resta 5-3:",resta)
##Multiplicación
multiplicacion = 8*4
print("multiplicación 8*4:",multiplicacion)
##División
division = 9/3
print("división 9/3:",division)
##Módulo
###Esta operación nos permite obtener el residuo o sobrante de una división.
modulo = 18%4
print("módulo 18%4:",modulo)
##División Entera
###Si el resultado de la división es un número decimal este operador nos permite obtener la parte entera, ignorando la parte decimal.
division_entera = 19//7
print("división entera 19//7:", division_entera)
##Potencia
potencia = 8**2
print("potencia 8**2:", potencia)

##Comparación
###Estos operadores como lo dice su nombre, nos permiten comparar 2 o más valores entre si, y siempre nos devolverá un booleano es decir True o False.
##Igual que
igual_que = 8 == 7
print("El 8 es igual a 7?:", igual_que)
igual_que = "hola" == "hola"
print("hola es igual a hola?:", igual_que)
igual_que = "hola" == "Hola"
print("hola es igual a Hola?:", igual_que)
##Diferente que
diferente_que = 8 != 5
print("El 8 es diferente a 7?:", diferente_que)
diferente_que = "hola" != "hola"
print("hola es diferente a hola?:", diferente_que)
diferente_que = "hola" != "Hola"
print("hola es diferente a Hola?:", diferente_que)
##Mayor
mayor = 8 > 5
print("El 8 es mayor a 7?:", mayor)
##Mayor o igual que
mayor_igual_que = 8 >= 5
print("El 8 es mayor o igual a 5?:", mayor_igual_que)
##Menor
menor = 8 < 5
print("El 8 es menor a 7?:", menor)
##Menor o igual que
menor_igual_que = 8<= 5
print("El 8 es menor o igual a 5?:", menor_igual_que)

##Asignación
##Igual
numero = 5
##Incremento
numero += 1
numero = numero + 1
##Decremento
numero -= 1
numero = numero -1
##*=
numero *= 2
numero = numero * 2
##/=
numero /= 2
numero = numero / 2
##%=
numero %= 2
numero = numero % 2
##**=
numero **= 2
numero = numero ** 2
##//=
numero //= 2
numero = numero // 2

##Lógicos
##Para entender a la perfección este tipo de operadores hay que primero comprender sus condiciones y respectivas tablas de verdad
##AND
y_logico = True and True
print("True y True:", y_logico)
##OR
o_logico = True or False
print("True o False:", o_logico)
##NOT
negacion = not True
print("negacion de True:", negacion)

##ESPECIALES
###Estos operadores son especiales ya que son usados para operaciones verificacion avanzada
#IS
### Este es un operador de indentidad devuelve un booleano y nos permite saber si algo es o no es algo
#IN
### Este operador nos permite saber si algo está dentro de un interador esto lo veremos más adelante