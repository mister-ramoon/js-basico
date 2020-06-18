var estudiantes = ["Ramon", "Juan", "Karen"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

//for
for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

//for of
for( var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}