#Las estructuras de datos juegan un rol muy importante en la programación ya que nos permiten agrupar datos para su respectiva manipuladción en los procesos del software, así que es indispensable entender el funcionamiento principal de los mismos.
#PD: si es de tu interés la inteligencia artificial, las estructuras de datos es una de las bases para adentrarse en ese maravilloso mundo.
#Antes de empezar con los diferentes tipos de estructuras de datos hay que entender las propiedades de una estructura: 
'''
  agrupador: cada uno de los tipos tiene su simbolo agrupador [], (), {}, cada uno de ellos nos permite identificar con que tipo de estructura estamos trabajando.
  índice: Es la posición en la que se encuentra un elemento dentro de la estructura, SIEMPRE empezamos desde 0 siendo este el índice de la primera posición.
  longitud: Representa a la cantidad de elementos que se encuentran en una lista, no confundir con índice ya que en la longitud se empieza a contar desde 1.

  llave y valor: son dos definiciones que detallaremos cuando hablemos de las estructuras que usan esta propiedad.
'''
#Listas
'''
  sintaxis
  lista = [elemento, elemento, elemento...]
'''
#Una lista es una estructura de datos que nos permite almacenar como elemento cualquier tipo de dato, estructura de datos u objeto.
lista = ["Joel", 26, "Guayaquil", True, ["python", "go", "javascript"], str]
print(lista)
#Para acceder a cada un de los elementos debemos utilizar el índice para referirnos al mismo.
nombre = lista[0]
edad = lista[1]
ciudad = lista[2]
estudiante = lista[3]
lenguajes = lista[4]
string = lista[5]
print(nombre, edad, ciudad, estudiante, lenguajes, string)
#De esta manera hemos guardado el valor de cada elemento en una variable obteniendolo referenciando el índice.
#Longitud
print("longitud",len(lista))
#Si deseamos cambar el varlor de uno de sus elementos debemos primero acceder al elemento mediante el índice e igualandolo a un nuevo valor.
lista[0] = "Kevin"
lista[1] = 28
print(lista)
#Así como el String las estructuras de datos también tienen sus métodos pero ya queda en ti buscarlos, entenderlos y aplicarlos.
print("******************")
#Tupla
#De igual manera como la lista una tupla almacena una variedad de elementos dentro de su estructura, tiene un orden pero sus elementos son inmutables, es decir luego de ser creada la tupla sus elementos no pueden ser modificados.
'''
  sintaxis
  tupla = (elemento, elemento, elemento...)
'''
tupla = ('Joel', 26, 'Guayaquil', True)
print(tupla)
#Tal como la lista se puede acceder a sus elementos medianto los índices pero no se pueden modificar.
nombre = tupla[0]
edad = tupla[1]
ciudad = tupla[2]
estudiante = tupla[3]
print(nombre, edad, ciudad, estudiante)
'''
  NO SE PUEDE
  tupla[0] = "Kevin"
  tupla[1] = 28
'''
#TIP
nombre, edad, ciudad, estudiante = tupla
print(nombre, edad, ciudad, estudiante)
print("****************************")
#SET
#La estructura Set de igual manera agrupa datos pero tiene un comportamiento muy particular, es desordenado osea no tiene índices, también es inmutable y no se pueden repetir elementos,si encuentra varios elementos repetidos solo es visible uno de ellos.
'''
  sintaxis
  conjunto = {elemento, elemento, elemento...}
'''
conjunto = {"Joel", "Joel", 26, 26, 26, "Guayaquil", True, True}
print(conjunto)
conjunto1 = set(["Joel", "Joel", 26, 26, 26, "Guayaquil", True, True])
print(conjunto1)
#Los sets al ser inmutables no se puede modificar su valor, si se puden agregar, eliminar pero no modificar.
conjunto.add("javascript")
print(conjunto)
conjunto.remove("javascript")
print(conjunto)
#Además la única forma de acceder a sus elementos es mediante una iteración ( Este concepto lo vamos a ver a fondo cuando veamos ciclos ) o pregunta si el valor está en el set
print("Joel" in conjunto)
print("**************************")
#Dict
#Los diccionarios son una estructura de datos no ordenada que se asemeja a una base datos es decir se crean campos y registros. En este caso toman el nombre de llave, valor; donde la llave es el identificador de acceso y el valor como su nombre lo dice es el valor que tiene esa propiedad.
'''
  sintaxis
  diccionario = {llave:valor, llave: valor}
'''
diccionario = {"nombre": "Joel", "apellido": "Gurumendi", "edad": 26, "ciudad": "Guayaquil", "lenguajes": ["go", "python", "java", "javascript"]}
print(diccionario)

#Para mostrar algún valor guardado en el diccionario si accede a el mediante la llave designada.
print(diccionario["lenguajes"])

#Para modificar un valor con tan solo acceder mediante la llave y luego igualarlo a otro valor sería suficiente para realizar la modificación.

diccionario["nombre"] = "Pedro"
print(diccionario["nombre"])

#Si deseamos aumentar algún otro elemento, necesitamos crear una nueva llave e igualarla al valor deseado

diccionario["estudiante"] = True
print(diccionario)

#Si deseamos eliminar un elemento con tan solo anteponer la palabra reservada del y luego acceder a la llave podríamos eliminar el mismo.

del diccionario["estudiante"]
print(diccionario)