/* Si hay algo que a Ale le molesta es o pasar frío o abrigarse de más. Pero lo que sí sabe, más allá de la temperatura
, es de qué color vestirse ese día. Para eso, pensó en una función que recibe una temperatura y un color y responde qué 
ropa de ese color ponerse. Si la temperatura es 22 grados o más, se pone una remera de ese color. Si no, se pone una 
campera de ese color:

vestirseAcorde(22, "negra");
("Remera negra");

vesitirseAcorde(21, "verde");
("Campera verde");

vestirseAcorde(23, "violeta");
("Remera violeta"); */
function vestirseAcorde(temp, color) {
    if(temp >= 22){
        return  `Remera ${color}`
    }else if(temp < 22){
        return `Campera ${color}`
    }
}
 console.log(vestirseAcorde(20, "negra"));
 console.log(vestirseAcorde(21, "verde"));
 console.log(vestirseAcorde(23, "violeta"));