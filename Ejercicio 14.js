/* Un local que vende productos de forma mayorista y minorista nos pidio ayuda para simplificar qué precio le
 corresponde a un producto a partir de las unidades a comprar.

Para ello definiremos una función que reciba las unidades a comprar, el precio minorista y el precio mayorista por 
unidad. Sabemos que a partir de 18 unidades venden a precio mayorista. Por ejemplo:

precioACobrarPorUnidad(10, 60, 50);
resultado esperado 50;

precioACobrarPorUnidad(19, 80, 60);
resultado esperado 60;

precioACobrarPorUnidad(17, 20, 10);
resultado esperado 20; */

function precioACobrarPorUnidad(productos ,minorista, mayorista) {
    if (productos >= 18) {
        return mayorista
    }else {
        return minorista
    }
}

console.log(precioACobrarPorUnidad(10, 60, 50));
console.log(precioACobrarPorUnidad(19, 80, 50));
console.log(precioACobrarPorUnidad(17, 20, 10));