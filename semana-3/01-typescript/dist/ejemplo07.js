"use strict";
const funcionAsync = async () => {
    return "Devilviendo una promesa";
};
funcionAsync().then((resp) => {
    console.log(`Respuesta ${resp}`);
});
