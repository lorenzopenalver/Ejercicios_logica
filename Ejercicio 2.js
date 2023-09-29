/* Ya sabemos que es muy importante saludar al llegar, el problema esta en que el saludo depende de la hora del día. ¡Por suerte este problema se puede resolver programando!

Podríamos tener una función que dado un nombre y un horario retorne el saludo correcto. Si es antes de las 12 debería ser buenos días, si es después buenas tardes

Por ejemplo:
saludar("Luis", 11);
("Buenos días Luis");

saludar("Carolina", 12);
("Buenas tardes Carolina");

saludar("Rocío", 13);
("Buenas tardes Rocío"); */

function saludar(nombre, hora) {
    if (hora < 12) {
        return `Buenos días ${nombre}`
    }else if(hora >= 12){
        return `Joder, buenas tardes ${nombre}`
    }
}

console.log(saludar("Luis", 11))


console.log(saludar("Carolina", 12));


console.log(saludar("Rocío", 13));
