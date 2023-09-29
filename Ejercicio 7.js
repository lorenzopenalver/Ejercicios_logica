/* Ale está haciendo un trabajo de investigación y nos pidió ayuda. Necesita poder sumar la cantidad de letras de 
las palabras cortas. Una palabra se considera corta si tiene 6 o menos letras. Veamos un ejemplo:

sumaDeLetrasDeCortas([
  "hola",
  "murcielago",
  "caballo",
  "choclo",
  "poco",
  "luz",
  "sol",
]);
20; */
function sumaDeLetrasDeCortas(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.length <= 6) {
            res.push(element.length)
        }
    }
    return res.reduce((sumar, iterar)=> sumar + iterar,0)
}
console.log(sumaDeLetrasDeCortas([
    "hola",
    "murcielago",
    "caballo",
    "choclo",
    "poco",
    "luz",
    "sol",
  ]));