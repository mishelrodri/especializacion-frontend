"use strict";
class Vehiculo {
    constructor(marca, year, modelo = "Corolla") {
        this.marca = marca;
        this.year = year;
        this.modelo = modelo;
    }
}
const myVehiculo = new Vehiculo("Toyota", 2010);
console.log(myVehiculo);
