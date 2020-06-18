function auto(brand, model, year, ) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var nuevoAuto;
var brandArray = ["Audi", "BMW", "Tesla", "Tesla", "Tesla", "Tesla","Honda","Jeep", "Kia", "Mitsubishi"];
var modelArray = ["A7", "X2", "Modelo S", "Model 3", "Model X", "Model Y", "Jazz", "Cherokee", "Stonic", "ASX"];
var yearArray = ["2020", "2019", "2017", "2018", "2019", "2020", "2018", "2019", "2019", "2017"];


for(i = 0; i < 10; i++){
    nuevoAuto = new auto(brandArray[i], modelArray[i], yearArray[i])
    console.log(nuevoAuto);
}