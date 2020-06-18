var auto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};

//Acceder a un valor del objeto
auto.annio
auto.marca
auto.modelo

//Métodos (Propiedad con función como valor)

var auto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
        //this es una variable que hace referencia al objeto
    }
};

auto.detalleDelAuto();

