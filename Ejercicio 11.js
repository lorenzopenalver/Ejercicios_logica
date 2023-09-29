/* Para quienes no suelen leer, la concentración puede variar cuando aparecen palabras largas. Para filtrarlas
 vamos a crear una función que dada una lista de palabras nos devuelva una lista nueva con las que tengan más de 6 
 caracteres.

palabraLargas(["jarra", "polilla", "caracol", "gato", "provincia"])[
  ("polilla", "caracol", "provincia")
]; */

function palabraLargas(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.length > 6) {
            res.push(element) 
     }
    };
    return res;
};
console.log(palabraLargas(["jarra", "polilla", "caracol","gato", "provincia"]))