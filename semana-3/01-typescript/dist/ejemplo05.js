"use strict";
const desestructurar = () => {
    const avenger = {
        nombre: "Tonya",
        clave: "Iron Man",
        poder: "volar",
        empresa: "La suya",
        ocupacion: "super hero",
    };
    const extraer = ({ nombre, clave, poder, ...datos }) => {
        console.log(nombre);
        console.log(clave);
        console.log(poder);
        console.log(datos);
    };
    extraer(avenger);
};
const desestructurarArray = () => {
    const persona = [
        "Juan Morales",
        "Licenciado",
        "Jugar Ténis",
        "UES",
        "No doy clases",
    ];
    const [nombre, profesion, ...datos] = persona;
    console.log(nombre);
    console.log(profesion);
    console.log(datos);
};
const estructurar = (nombre, ...todo) => {
    console.log(nombre);
    console.log(todo);
};
console.log("------DESESTRUCTURAR OBJ--------");
desestructurar();
console.log("------DESESTRUCTURAR ARRAYS--------");
desestructurarArray();
console.log("------ESTRUCTURAR--------");
estructurar("Armando Paredes", 25, "7865-8744", "Avenida los chuchitos n.465, San Salvador", "UES");
