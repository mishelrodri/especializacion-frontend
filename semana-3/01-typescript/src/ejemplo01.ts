class Saludo {
  saludar(nombre: string) {
    console.log("Saludando a " + nombre);
  }
  edad(edad: number) {
    if (edad >= 18) {
      console.log(`Es mayor de edad, tiene ${edad} años`);
    } else {
      console.log(`Es menor de edad, tiene ${edad} años`);
    }
  }
}

let saludo = new Saludo();
saludo.saludar("Juan");
saludo.edad(20);
