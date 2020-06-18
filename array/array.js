var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
console.log(frutas);

//index del Array
frutas[0];
//Manzana
frutas[3];
//Fresa

frutas.length
//Nos mostrará la longitud del array o cuantos datos tiene.

var posicion = frutas.indexOf("Cereza");
//Nos regresa la posición en el indice del dato indicado.

//Modificar o mutar Array

var masFrutas = frutas.push("Uvas");
//Agrega un dato a la parte final del array

var ultimaFruta = frutas.pop("Uvas");
// Elimina el último dato del array

var nuevaFruta = frutas.unshift("Uvas");
// Agrega un dato a la parte inicial del array

var borrarFruta = frutas.shift("Uvas");
// Elimina el primer dato del array
