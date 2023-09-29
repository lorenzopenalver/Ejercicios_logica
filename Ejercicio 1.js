/* Vamos a definir una función concatenacionEsIgual que recibe tres strings y nos dice si la concatenación de los dos primeros es igual al tercero:

concatenacionEsIgual ("mari", "posa", "langosta") false
concatenacionEsIgual ("guarda", "ropas", "guardaropas") true */

function concatenacionEsIgual (string1, string2, string3) {
    if(string1 + string2 == string3){
        return true
    }else{
        return false
    }
} 
console.log(concatenacionEsIgual ("mari", "posa", "langosmata"));
console.log(concatenacionEsIgual ("guarda", "ropas", "guardaropas"));

