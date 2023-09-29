/* Vamos a sumarle funciones a una extravagante calculadora. Queremos obtener la suma de los elementos mayores a 7 de una lista. Por ejemplo:

sumaDeLosMayoreASiete([2, 5, 9, 8, 11]);
28; //Porque es la suma de 9, 8 y 11. */

function sumaDeLosMayoreASiete(arr) {
    let res = []

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
       
        if (element > 7) {
            res.push(element)
        }
    }
    return res.reduce((suma, iter) => suma + iter,0)
}
console.log(sumaDeLosMayoreASiete([2, 5, 9, 8, 11]))