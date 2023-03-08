class Vehiculo {
  constructor(
    public marca: string,
    public year: number,
    public modelo: string = "Corolla"
  ) {}
}

const myVehiculo = new Vehiculo("Toyota", 2010);
console.log(myVehiculo);
