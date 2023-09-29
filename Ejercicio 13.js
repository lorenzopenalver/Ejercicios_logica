/* En este ejercicio vamos a definir una función que nos permita saber si la tierra es fértil para plantar, 
es decir, si su ph es 5 y su porcentaje de humedad esta entre 26 y 39.

Por ejemplo:
esTierraFertil(5, 30);
true;

esTierraFertil(5, 20);
false; //porque 20 es menor que 26

esTierraFertil(3, 30);
false; //porque 3 es distinto de 5 */

function esTierraFertil(ph, porcentaje) {
    if (ph == 5 && porcentaje > 26 && porcentaje < 39) {
        return true
    }else{
        return false
    }
}

console.log(esTierraFertil(5, 30));
console.log(esTierraFertil(5, 20));
console.log(esTierraFertil(3, 30));
