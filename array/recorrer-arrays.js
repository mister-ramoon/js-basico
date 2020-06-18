var articulos = [
    { nombre: "Bici", costo: 3000 },
    {  nombre: "Tv", costo: 2500 },
    {  nombre: "Libro", costo: 320 },
    {  nombre: "Celular", costo: 10000 },
    {  nombre: "Laptop", costo: 20000 },
    {  nombre: "Teclado", costo: 500 },
    {  nombre: "Audifonos", costo: 1700 },
]

//Filtar
var articulosFiltrados = articulos.filter( function(articulo){
    return articulo.costo <= 500;
})

//Mapear
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
})

//Find
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

//ForEach
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//Some
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})