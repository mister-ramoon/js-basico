//IF
var edad = 18;

if(edad === 18) {
    console.log("Puedes votar por primera vez");
}
else if (edad > 18) {
    console.log("Puedes votar de nuevo");
}
else {
    console.log("Aun no puedes votar");
}

//Operador Ternario

condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Soy un Uno" : "No soy un Uno";