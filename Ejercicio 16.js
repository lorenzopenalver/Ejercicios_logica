/* A partir de un censo nos pidieron poder pasar en limpio la información de los datos obtenidos.
 Para ello contamos con registros habitacionales de distintas familias. Por ejemplo:

let casaChaldu = {
  familia: "Chaldu",
  integrantes: ["Elena", "Tita", "Marucha"],
  direccion: "Pordomingo 400",
};

let casaDominguez = {
  familia: "Dominguez",
  integrantes: ["Olivia", "Micaela", "Sol", "Alex"],
  direccion: "Belgrano 350",
};
Definí la función resumenDeInformacion que permita obtener un resumen de la información registrada. 
Por ejemplo:

resumenDeInformacion(casaChaldu);
("La familia Chaldu cuenta con 3 integrantes que viven en Pordomingo 400");
resumenDeInformacion(casaDominguez);
("La familia Dominguez cuenta con 4 integrantes que viven en Belgrano 350"); */
let casaChaldu = {
    familia: "Chaldu",
    integrantes: ["Elena", "Tita", "Marucha"],
    direccion: "Pordomingo 400",
  };
  
  let casaDominguez = {
    familia: "Dominguez",
    integrantes: ["Olivia", "Micaela", "Sol", "Alex"],
    direccion: "Belgrano 350",
  };
function resumenDeInformacion(casa) {
    return `La familia ${casa.familia} cuenta con ${casa.integrantes.length} integrantes que viven en ${casa.direccion}`
}
console.log(resumenDeInformacion(casaChaldu));
console.log(resumenDeInformacion(casaDominguez));