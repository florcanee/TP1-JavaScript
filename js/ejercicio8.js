/*
8.- Escribe un programa que pida un número y 
diga si es divisible por 2
*/

let numero1 = parseInt(prompt('Escriba un numero'))

if (numero1 % 2 === 0 ){
    document.write(`El numero ${numero1} es divisible por 2`);
}else{
    document.write(`El numero no es divisible por 2`);
}