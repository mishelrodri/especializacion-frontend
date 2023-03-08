"use strict";
const promesa = new Promise((resolve, reject) => {
    if (false) {
        setTimeout(() => {
            resolve("Eureka");
        }, 2500);
    }
    else {
        reject("Algo salio mal");
    }
});
promesa
    .then((resp) => {
    console.log(`Respuesta ${resp}`);
})
    .catch((error) => console.log("Error en la promesa: ", error));
