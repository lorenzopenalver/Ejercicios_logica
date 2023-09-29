/* Una conocida aplicación para escuchar música online quiere hacer un resumen con la información importante de sus 
canciones. Las canciones se almacenan como registros de la siguiente forma:

let elGenioDeLaNada = {
  nombre: "El genio de la nada",
  banda: "Eruca Sativa",
  duracion: 4,
};
elGenioDeLaNada.

let lotusFlower = {
  nombre: "Lotus flower",
  banda: "Radiohead",
  duracion: 5,
}; 

Queremos definir una función que retorne un resumen de manera simple. Por ejemplo:
resumenCancion(elGenioDeLaNada);
("El genio de la nada de la banda Eruta Sativa tiene una duración de 240 segundos");

resumenCancion(lotusFlower);
("Lotus flower de la banda Radiohead tiene una duración de 300 segundos");

*/
let elGenioDeLaNada = {
    nombre: "El genio de la nada",
    banda: "Eruca Sativa",
    duracion: 4,
  };
  
  let lotusFlower = {
    nombre: "Lotus flower",
    banda: "Radiohead",
    duracion: 5,
  }; 
function resumenCancion(cancion) {
    return `${cancion.nombre} de la banda ${cancion.banda} tiene una duración de ${cancion.duracion * 60} segundos`
}

console.log(resumenCancion(lotusFlower));
console.log(resumenCancion(elGenioDeLaNada));



