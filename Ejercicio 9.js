/* Vamos a un maravilloso mundo ... ¡el de la matemática!

Los números se pueden operar y comparar. Nada nos impide hacer un poco de ambas al mismo tiempo.

Para eso vamos a crear una función que reciba 3 números y nos diga si la suma de los primeros es menor al tercero. 
Por ejemplo:

esMenorLaSuma(2, 4, 8);
true; //Porque 6 es menor que 8

esMenorLaSuma(3, 5, 7);
false; //Porque 8 es mayor a 7 */

function esMenorLaSuma(num1, num2, num3) {
    if (num1 + num2 < num3) {
        return true
    }else if (num1 + num2 >= num3){
       return false
    }
}
console.log(esMenorLaSuma(2, 4, 8));
console.log(esMenorLaSuma(3, 5, 7));