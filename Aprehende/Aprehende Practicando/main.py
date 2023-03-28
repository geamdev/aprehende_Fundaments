# Realiza un programa que pida por consola nombre, edad, ciudad y luego muestra esa información separado por comas (utiliza las 5 formas de formatear un texto).

def pedir_informacion():
  while True :
    try:
      nombre = input('Ingrese su primer nombre: ')
      nombre = nombre.capitalize()
      # utilizo isalpha() que devuelve true si todos los caracteres son letras y no hay espacios.
      if nombre.isalpha() == False:
        raise ValueError  
      break
    except ValueError:
      print('Por favor, ingrese un nombre válido.')
  while True :
    try:
      edad = int(input('Ingrese su edad: '))
      break
    except ValueError:
      print('Por favor, ingrese un número entero para su edad.')

  while True :
    try:
      ciudad = input('Ingrese su ciudad: ')
      ciudad = ciudad.capitalize()
      if ciudad.isalpha() == False:
        raise ValueError
      break
    except ValueError:
      print('Por favor, ingrese una ciudad válida.')

  return nombre, edad, ciudad;

def mostrar_informacion(nombre, edad, ciudad):
  print(f'Hola {nombre} tu edad es {edad} y vives en la ciudad {ciudad}');
  print('Hola ' + nombre + ' tu edad es ' + str(edad) + ' y vives en la ciudad ' + ciudad);
  print('Hola {} tu edad es {} y vives en la ciudad {}'.format(nombre, edad, ciudad));
  print('Hola {0} tu edad es {1} y vives en la ciudad {2}'.format(nombre, edad, ciudad));
  print('Hola {nombre} tu edad es {edad} y vives en la ciudad {ciudad}'.format(nombre = nombre, edad = edad, ciudad = ciudad));
  print('Hola %s tu edad es %d y vives en la ciudad %s'%(nombre, edad, ciudad));

informacion = pedir_informacion();
mostrar_informacion(*informacion);

#Realiza un programa que pida al usuario dos números enteros y realice las operaciones aritméticas básicas, suma, resta, multiplicación y división recuerda no se puede dividir para cero luego muestra por pantalla de forma ordenada.

def pedir_numeros():
  while True :
    try:
      numero1 = int(input('Ingrese el primer número: '))
      break
    except ValueError:
      print('Por favor, ingrese un número entero para el primer número.')

  while True :
    try:
      numero2 = int(input('Ingrese el segundo número: '))
      break
    except ValueError:
      print('Por favor, ingrese un número entero')

  return numero1, numero2;

def mostrar_resultados(numero1, numero2):
  print(f'La suma de {numero1} y {numero2} es {numero1 + numero2}');
  print(f'La resta de {numero1} y {numero2} es {numero1 - numero2}');
  print(f'La multiplicación de {numero1} y {numero2} es {numero1 * numero2}');
  if numero2 != 0:
    print(f'La división de {numero1} y {numero2} es {numero1 / numero2}');
  else:
    print('No se puede dividir entre cero');

numeros = pedir_numeros();
mostrar_resultados(*numeros);


#Realiza un programa que me muestre por pantalla la tabla de verdad de los 3 operadores lógicos. ( Utiliza variables, no coloques el valor directamente en el Print )

# Debería quedar así:
# 					AND
# False and False = False
# False and True = False
# True and False = False
# True and True = True
# OR
# False or False = False
# False or True = True
# True or False = True
# True or True = True
# NOT
# not False = True
# not True = False

def mostrar_tabla():
  a = True
  b = False
  print('AND')
  print(f'{a} and {a} = {a and a}')
  print(f'{a} and {b} = {a and b}')
  print(f'{b} and {a} = {b and a}')
  print(f'{b} and {b} = {b and b}')
  print('OR')
  print(f'{a} or {a} = {a or a}')
  print(f'{a} or {b} = {a or b}')
  print(f'{b} or {a} = {b or a}')
  print(f'{b} or {b} = {b or b}')
  print('NOT')
  print(f'not {a} = {not a}')
  print(f'not {b} = {not b}')
  

mostrar_tabla();






# Realizar un programa que permita registrar un usuario, con nombre de usuario, correo y contraseña; esos datos almacenar en la estructura de datos de su preferencia(lo más óptimo sería usar un diccionario, pero con cualquiera es posible ), apenas termine de registrar le permitirá registrar otros usuarios, el programa siempre deberá comprobar a la estructura de datos si el usuario o el email existen, si es así le indicará al usuario que ya existe y le pedirá que ingrese otro usuario o email.
# Reglas: 
# 1 EL nombre de usuario se debe guardar en mayúsculas (No importa si el usuario lo escribe con minúsculas)
# 2 El correo antes de guardarlo debe ser comprobado que cumple una estructura de correo es decir que contiene un @ y un .
# 3 La contraseña solo puede ser máx de 6 dígitos

def registrar_usuario():
  while True:
    try:
      usuario = input('Ingrese un nombre de usuario: ')
      usuario = usuario.upper()
      if usuario.isalpha() == False:
        raise ValueError
      break
    except ValueError:
      print('Por favor, ingrese un nombre de usuario válido.')
  while True:
    try:
      correo = input('Ingrese un correo: ')
      if correo.find('@') == -1 or correo.find('.') == -1: 
        raise ValueError
      break
    except ValueError:
      print('Por favor, ingrese un correo válido.')
  while True:
    try:
      contrasena = input('Ingrese una contraseña: ')
      if len(contrasena) > 6:
        raise ValueError
      break
    except ValueError:
      print('Por favor, ingrese una contraseña válida.')
  return usuario, correo, contrasena;

def mostrar_usuarios(usuarios):
  print('Usuarios registrados:')
  for usuario in usuarios:
    print(usuario)

def comprobar_usuario(usuarios, usuario):
  for u in usuarios:
    if u['usuario'] == usuario:
      return True
  return False

def comprobar_correo(usuarios, correo):
  for u in usuarios:
    if u['correo'] == correo:
      return True
  return False

usuarios = []
while True:
  usuario = registrar_usuario()
  if comprobar_usuario(usuarios, usuario[0]):
    print('El usuario ya existe')
  elif comprobar_correo(usuarios, usuario[1]):
    print('El correo ya existe')
  else:
    usuarios.append({'usuario': usuario[0], 'correo': usuario[1], 'contrasena': usuario[2]})
    mostrar_usuarios(usuarios)
    if input('¿Desea registrar otro usuario? (s/n): ') == 'n':
      break

