/* Aveces la matemática puede ser un poco tediosa. La buena noticia es que ahora podemos crear funciones que nos ayuden
 a resolver estos problemas.

Para eso vamos a crear una función que reciba 3 números y nos diga si la resta entre los 2 primeros es mayor al tercero.

Por ejemplo:
laRestaEsMasGrande (4,2,8)
false //Porque 4 menos 2 es 2 y es menor a 84

laRestaEsMasGrande (12,3,5)
true //Porque 12 menos 3 es 9 y es mayor a 5 */

function laRestaEsMasGrande(num1, num2, num3) {
    if(num1 - num2 > num3){
        return true
    }else{
        return false
    }
}
console.log(laRestaEsMasGrande (16,8,8));
console.log(laRestaEsMasGrande (12,3,5));