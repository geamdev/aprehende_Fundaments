# El programa consiste en un juego de penaltis, donde el jugador se enfrentara a la cpu.
# Consiste en que el jugador decidira a que direccion patear en un arco de 6 posiciones como el siguiete:

"""
******************************************************
******************************************************
**               |                 |                **
**      1        |        2        |         3      **
**               |                 |                **
**--------------------------------------------------**
**               |                 |                **
**      4        |        5        |         6      **
**               |                 |                **

Tiros

"""

# Cuando seleccione hacia donde patear el arquero debera adivinar la posicion donde el jugador pateo.
# Por cada tiro al arco se visualizara el mismo de la siguiente manera:
# Si fue gol, se visualizara con una O, y luego de 3 segundo regresara al estado inicial
# Tambien mostrara un tabla con los tiros

"""
******************************************************
******************************************************
**               |                 |                **  
**      O        |        2        |         3      **
**               |                 |                **                     
**--------------------------------------------------**
**               |                 |                **
**      4        |        5        |         6      **
**               |                 |                **

Tiros

"""

# Si no fue gol se visualizara con una X y luego de 3 segundo regresara al estado inicial

"""
******************************************************
******************************************************
**               |                 |                **
**      X        |        2        |         3      **
**               |                 |                **
**--------------------------------------------------**
**               |                 |                **
**      4        |        5        |         6      **
**               |                 |                **
Tiros
O
X

"""
import random
import time
import os

def mostrar_tiros(posiciones, tiros):
    for i in range(6):
        if str(i+1) in [t[0] for t in tiros]:
            print('O' if posiciones[i] == 'O' else 'X', end='')
        else:
            print(' ', end='')
        if i == 2 or i == 5:
            print('')
    print('Tiros')
    for t in tiros:
        print(t[0], t[1])


def mostrar_tabla_tiros(posiciones, tiros):
    print('******************************************************')
    print('******************************************************')
    print('**               |                 |                **')
    print(f'**      {posiciones[0]}        |        {posiciones[1]}        |         {posiciones[2]}      **')
    print('**               |                 |                **')
    print('**--------------------------------------------------**')
    print('**               |                 |                **')
    print(f'**      {posiciones[3]}        |        {posiciones[4]}        |         {posiciones[5]}      **')
    print('**               |                 |                **')
    mostrar_tiros(posiciones, tiros)
    print('')


def preguntar_direccion():
    while True:
        try:
            mostrar_tabla_tiros(['1', '2', '3', '4', '5', '6'], [])
            direccion = int(input('Ingrese la posicion donde desea patear: '))
            time.sleep(3)
            limpiar_pantalla()
            if not 1 <= direccion <= 6:
                raise ValueError
            break
        except ValueError:
            print('Por favor, ingrese una posicion valida.')
    return direccion


def adivinar_posicion():
    return random.randint(1, 6)


def simular_tiro(direccion_cpu, direccion_jugador, posiciones, tiros):
    if direccion_cpu == direccion_jugador:
        posiciones[direccion_jugador - 1] = 'O'
        tiros.append((str(direccion_jugador), 'GOL'))
    else:
        posiciones[direccion_jugador - 1] = 'X'
        tiros.append((str(direccion_jugador), 'Fallo'))


def mostrar_tiro(posiciones, tiros):
    mostrar_tabla_tiros(posiciones, tiros)
    time.sleep(3)
    mostrar_tabla_tiros(['1', '2', '3', '4', '5', '6'], tiros)
    limpiar_pantalla()


def limpiar_pantalla():
    os.system('clear')


def jugar():
    posiciones = ['1', '2', '3', '4', '5', '6']
    tiros = []
    tiros_fallidos = 0
    for _ in range(5):
        direccion_cpu = adivinar_posicion()
        direccion_jugador = preguntar_direccion()
        simular_tiro(direccion_cpu, direccion_jugador, posiciones, tiros)
        if tiros[-1][1] == 'Fallo':
            tiros_fallidos += 1
        mostrar_tiro(posiciones, tiros)
    mostrar_tabla_tiros(posiciones, tiros)
    if tiros_fallidos > 2:
        print('Has perdido!')
    else:
        print('Has ganado!')


if __name__ == '__main__':
    jugar()
