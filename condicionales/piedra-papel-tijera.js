var piedra = 1;
var papel = 2;
var tijera = 3;

function game (){
    var chooseUser = prompt("¿Con qué vas a jugar? \n 1.Piedra \n 2.Papel \n 3.Tijera")
    var user = parseInt(chooseUser);

    var machine = Math.ceil(Math.random() * 3);

    if(user === piedra && machine === papel ){
        console.log("Usuario: Piedra");
        console.log("Máquina: Papel");
        console.log("Gana Máquina");
    }
    else if (user === piedra && machine === tijera) {
        console.log("Usuario: Piedra");
        console.log("Máquina: Tijera");
        console.log("Gana Usuario");
    }
    else if (user === piedra && machine === piedra) {
        console.log("Usuario: Piedra");
        console.log("Máquina: Piedra");
        console.log("Empate");
    }

    else if (user === papel && machine === piedra) {
        console.log("Usuario: Papel");
        console.log("Máquina: Piedra");
        console.log("Gana Usuario");
    }
    else if (user === papel && machine === papel) {
        console.log("Usuario: Papel");
        console.log("Máquina: Papel");
        console.log("Empate");
    }
    else if (user === papel && machine === tijera) {
        console.log("Usuario: Papel");
        console.log("Máquina: Tijera");
        console.log("Gana Máquina");
    }

    else if (user === tijera && machine === piedra) {
        console.log("Usuario: Tijera");
        console.log("Máquina: Piedra");
        console.log("Gana Máquina");
    }
    else if (user === tijera && machine === papel) {
        console.log("Usuario: Tijera");
        console.log("Máquina: Papel");
        console.log("Gana Usuario");
    }
    else if (user === tijera && machine === tijera) {
        console.log("Usuario: Tijera");
        console.log("Máquina: Tijera");
        console.log("Empate");
    }
    else {
        console.log("Vuelve a a intentarlo, coloca un número valido");
    }

}

