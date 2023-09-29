/* En un curso de química nos pidieron una función que se encargue de hacer un resumen de la información
 de los elementos de la tabla periodica. Para ello contamos con registros como estos:

let radio = {
elemento: "Radio",
aniosDeDescubrimiento: 1898,
fueDescubiertoPor: "Madame Curie"
}

let kripton = {
elemento: "Kriptón"
aniosDeDescubrimiento: 1898,
fueDescubiertoPor: "William Ramsay"
}
Definí la función resumenDeAtomo que permita obtener un resumen de la información registrada. Por ejemplo

resumenDeAtomo(radio); */

let radio = {
    elemento: "Radio",
    aniosDeDescubrimiento: 1898,
    fueDescubiertoPor: "Madame Curie"
    }
    
    let kripton = {
    elemento: "Kriptón",
    aniosDeDescubrimiento: 1898,
    fueDescubiertoPor: "William Ramsay"
    }

function resumenDeAtomo(elemnt) {
    return `El elemto ${elemnt.elemento} fue descubierto en ${elemnt.aniosDeDescubrimiento}, por ${elemnt.fueDescubiertoPor}.`
};
console.log(resumenDeAtomo(radio));
console.log(resumenDeAtomo(kripton));
