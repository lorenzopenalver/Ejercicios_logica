/* Los servicios de película bajo demanda lograron despertar un interés renovado en la sociedad por el cine y las 
series. Es por ello que contamos registros de este estilo:

let gus = {
  nick: "Wuisti",
  promedioPeliculasMensuales: 5,
  plataforma: "Netflix",
};

let ariel = {
  nick: "Ari",
  promedioPeliculasMensuales: 10,
  plataforma: "Amazon",
};
Ahora debemos definir una función que permita obtener un resumen de la información registrada de manera simple. Por
 ejemplo:

resumenInfo(gus);
("Se estima que Wuisti verá 60 películas en un año con la plataforma de Netflix"); */
let gus = {
    nick: "Wuisti",
    promedioPeliculasMensuales: 5,
    plataforma: "Netflix",
  };
  
  let ariel = {
    nick: "Ari",
    promedioPeliculasMensuales: 10,
    plataforma: "Amazon",
  };

function resumenInfo(user) {
    return `Se estima que ${user.nick} verá ${user.promedioPeliculasMensuales * 12} películas en un año con la plataforma de ${user.plataforma}`
}
console.log(resumenInfo(gus));
console.log(resumenInfo(ariel));