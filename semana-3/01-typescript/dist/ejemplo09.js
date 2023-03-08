"use strict";
const funcAsync = async () => {
    const promesa = new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("Eureka");
            }, 2500);
        }
        else {
            reject("Algo salio mal");
        }
    });
    let resultado = await promesa;
    console.log(`Respuesta ${resultado}`);
};
funcAsync();
