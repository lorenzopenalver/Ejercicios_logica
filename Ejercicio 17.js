/* Ro está programando una aplicación con distintas funcionalidades del clima. En esta oportunidad nos 
pidió ayuda para definir una función que nos indique si el clima esta agradable la cuál llamaremos esDiaLindo. 
Para que esto suceda la temperatura tiene que ser 20 y no tiene que estar lloviendo. Por ejemplo:

esDiaLindo(20, false);
true;

esDiaLindo(20, true);
false; //Porque esta lloviendo

esDiaLindo(18, false);
false; //Porque la temperatura es menor a 20 */

function esDiaLindo(temperatura, boolean) {
    if (temperatura == 20 && boolean == false) {
        return true
    }else{
        return false
    }
}
console.log(esDiaLindo(20, false));
console.log(esDiaLindo(20, true));
console.log(esDiaLindo(18, false));