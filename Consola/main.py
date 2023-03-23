#Para imprimir un mensaje por consola escribmos la función predefinida de python print()
print("Hola Mundo")

#Cuando estámos iniciando a aprender un lenguaje lo más común es entender sus funcionalidades, comportamientos y demás, interactuando con la consola. En python la función predefinida que nos permite realizar dicha acción es input()

#Cada vez que requerímos un dato por consola, este debe ser guardado en una variable.

#Dentro de la función input si lo deseamos podemos colocar un mensaje que nos permita entender que dato estamos pidiendo por consola.

#El consola el puntero se colocará justo después de la frase insertada en la función input así que lo recomendable sería dejar un espacio luego de la frace o utilizar el caracter especial \n que generará un salto de linea en la consola.

sin_espacio = input("Cual es tu nombre?")
con_espacio = input("Cual es tu nombre? ")
con_salto = input("Cual es tu nombre? \n")
 
input("Cual es tu nombre? ") #No guardamos el dato en una variable, por lo tanto no podremos utilizarlo en el futuro.
input() #Si no colocamos nada dentro de la función input, el consola nos pedirá un dato pero no nos mostrará un mensaje.

# Otra forma muy comun de utilizar esta funcion es despues de un print()

print("Cual es tu nombre? ")
nombre = input()

#De esta manera la impresión del mensaje y la petición se realizan de forma separada y se evita utilizar el caracter especial \n,

#Ya queda en tu criterio que forma utilizar.

