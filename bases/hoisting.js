//Hoisting en consola con variables
var miNombre = "Juan";
undefined
undefined

var miNombre = undefined
undefined

console.log(miNombre)
undefined
undefined

var miNombre = undefined;
console.log(miNombre + "Soy el hoisting");
miNombre = "Juan";
undefined
"Juan"

//hoisting en consola con funciones
hey();
function hey (){
    console.log("Hola " + miNombre);
}
"Hola undefined"