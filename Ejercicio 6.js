/* Queremos crear un mezclador de palabras que reciba 2 palabras y un número. Si el número es menor o igual a 6 el 
mezclador concatena la primera palabra con la segunda. En cambio, si el número es mayor a 6, concantena la segunda con 
la primera:

mezcladorDePalabras("planta", "naranja", 6);
("plantanaranja");

mezcladorDePalabras("amor", "amarillo", 5);
("amoramarillo");

mezcladorDePalabras("mate", "pato", 7);
("patomate"); */

function mezcladorDePalabras(palabra1, palabra2, numero) {
    if (numero <= 6) {
        return palabra1 + palabra2
    }else if (numero > 6){
        return palabra2 + palabra1
    }
}
console.log(mezcladorDePalabras("planta", "naranja", 6));
console.log(mezcladorDePalabras("amor", "amarillo", 5));
console.log(mezcladorDePalabras("mate", "pato", 7));