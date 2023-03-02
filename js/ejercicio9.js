/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

*/

    
    let frase = prompt("Escribe una frase");

    for(let vocal = 0; vocal < frase.length; vocal++){
        if(frase.charAt(vocal) === "a" || 
           frase.charAt(vocal) === "e" ||
           frase.charAt(vocal) === "i" ||
           frase.charAt(vocal) === "o" ||
           frase.charAt(vocal) === "u") {
    
            document.write(frase[vocal]);
           }
    }