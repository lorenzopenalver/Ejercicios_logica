/* En una biblioteca guardan registro de todos los libros leídos por las personas que la concurren. 
Estos registros tienen la siguiente forma:

let juan = {
  nombre: "Juan Arrever",
  librosLeidos: [
    "El conde de Montecristo",
    "La palabra",
    "Mi planta de naranja lima",
  ],
  anioSuscripcion: 1992,
};

let elena = {
  nombre: "Elena Chalver",
  librosLeidos: ["Rabia", "Vida de Bob Marley"],
  aniosSuscripcion: 1987,
};
Ahora debemos definir una función que permita obtener un resumen de la información registrada de manera simple. 
Por ejemplo:

resumenSuscripcion(juan);
("Juan Arrever se suscribió hace 28 años y leyó 3 ejemplares");

resumenSuscripcion(elena);
("Elena Chalver se suscribió hace 33 años y leyó 2 ejemplares"); */

let juan = {
    nombre: "Juan Arrever",
    librosLeidos: [
      "El conde de Montecristo",
      "La palabra",
      "Mi planta de naranja lima",
    ],
    aniosSuscripcion: 1992,
  };
  
  let elena = {
    nombre: "Elena Chalver",
    librosLeidos: ["Rabia", "Vida de Bob Marley"],
    aniosSuscripcion: 1987,
  };
function resumenSuscripcion(user) {
    return `${user.nombre} se suscribió hace ${2023 - user.aniosSuscripcion} años y leyó ${user.librosLeidos.length} ejemplares`
}

console.log(resumenSuscripcion(juan));
console.log(resumenSuscripcion(elena));