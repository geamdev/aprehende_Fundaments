#El formateo nos permite agilizar la forma de escribir una cadena de texto, existe varias formas de escribir estos formatos, ya depende de ti adaptarte al que más te agrade.
#Concatenación
nombre = "Pedro"
apellido = "Bravo"
edad = 22
sueldo = 800.80

print("Hola " + nombre + " " + apellido + " tienes " + str(edad) + " años")
#Formateo con %
##Este tipo de formate utiliza el % para definir el tipo de dato de la variable que se va a insertar al texto.
'''
  %c = str, simple carácter.
  %s = str, cadena de carácter.
  %d = int, enteros.
  %f = float, coma flotante.
  %o = octal.
  %x = hexadecimal.
'''

print("Hola %s" %nombre)
print("Hola %s %s, tienes %d años"%(nombre,apellido,edad))
print("Hola %s %s, tienes %d años tu sualdo actual es de %.2f"%(nombre,apellido,edad,sueldo))

#Formate con el método .format()
print("Hola {0}".format(nombre))
print("Hola {0} {1}, tienes {2} años tu sualdo actual es de {3}".format(nombre,apellido,edad,sueldo))

print("Hola {n}".format(n = nombre))
print("Hola {nombre} {apellido}, tienes {edad} años tu sualdo actual es de {sueldo}".format(nombre = nombre,apellido = apellido,edad = edad,sueldo = sueldo))

#formato con f la que mas me gusta
print(f"Hola {nombre}")
print(f"Hola {nombre} {apellido}, tienes {edad} años tu sueldo actual es de {sueldo}")

a = 3
b = 9

print(f"La suma de 3 + 9 es {a + b}")