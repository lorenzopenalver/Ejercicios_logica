/* En este ejercicio necesitamos definir una función que nos indique si una serie terminó. 
Para saber si termino o no vamos a considerar que las series que emitieron su última temporada antes del 2010 
están finalizadas.

Para ello vamos a definir la función situacionSerie que recibe un año como argumento y retornará "Concluida" o 
"Pendiente" según corresponda. Por ejemplo:

situacionSerie(2007);
("Concluida");
situacionSerie(2021);
("Pendiente"); */
function situacionSerie(year) {
    if (year > 2010) {
        return "Pendiente"
    }else{
        return "Concluida"
    }
}
console.log(situacionSerie(2007));
console.log(situacionSerie(2021));