/* A veces queremos llevar registro de la distancia recorrida y calcularla puede ser una tarea tediosa. 
¡Pero la programación puede ayudarnos!

Para eso vamos a definir una función que reciba una lista con la cantidad de kilómetros recorridos por una persona 
y nos retorne el total en metros. Por ejemplo:

metrosRecorridos([1, 3, 20, 21]);
26000; //Porque 1+ 3 + 20 + 21 = 25 y 25 * 1000 = 26000

metrosRecorridos([1, 0, 1, 2]);
4000; //Porque 1 + 0 + 1 + 2 = 4 *  y 4 * 1000 = 4000 */

function metrosRecorridos(arr) {
    let res = arr.reduce((sum,item) => sum + item,0);
    return res * 1000
}
console.log(metrosRecorridos([1, 3, 20, 21]));
console.log(metrosRecorridos([1, 0, 1, 2]));