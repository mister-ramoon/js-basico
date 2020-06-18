//Funciones Declarativas

function miFuncion(){
    return 3;
}

//Funciones Expresión
var miFuncion = function () {
    return a + b;
}

//Función con parametros
var miFuncion = function (a, b) {
    return a + b;
}
miFuncion(1, 2);


//Ejemplos de consola
function saludarEstudiantes (estudiante) {
    console.log(`Hola ${estudiante}`);
}
saludarEstudiantes("Ramon");

function sumar(a, b){
    var resultado = a + b;
    return resultado;
}
sumar(2, 2);