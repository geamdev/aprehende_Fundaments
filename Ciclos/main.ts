// En TypeScript existen tipos de ciclos que realizan la misma funcion pero la implemetacion es totalmente diferente 

// For 
// Este es el de toda la vida, desde los albores del desarrollo moderno es una estructura que se ha usado siempre.

// Sintaxis
`
  for('definicion'; 'condicion';'update'){
    codigo
  }
`
// Ejemplo 
for (let i: number = 0; i < 3; i++) {
  console.log ("Block statement execution no." + i);
}

// While 
// cuando queramos usar este bucle hay que leerlo asi mientra esta condicion se cumpla hara este codigo

// sintaxis
`
 while(condicion){
  codigo
 }
`

// Ejemplo
let n:number = 0;
let x: number = 0;
while (n < 3) {
  n++;
  x += n;
}

