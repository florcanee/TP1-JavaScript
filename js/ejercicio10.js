/*

10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
(sólo hay que comprobar si lo es por uno de los cuatro)

*/

let numero = parseInt(prompt('Escribe un numero'))

if (numero % 2 === 0){
    document.write('Es divisible por 2 <br>')
}

if (numero % 3 === 0){
    document.write('Es divisible por 3 <br>')
}

if (numero % 5 === 0){
    document.write('Es divisible por 5<br>')
}

if (numero % 7 === 0){
    document.write('Es divisible por 7<br>')
}
if(numero % 7 !== 0 && numero % 5 !== 0 && numero % 3 !== 0 && numero % 2 !== 0){
document.write('El numero no es divisible ni por 7, 5, 3, 2')
}
