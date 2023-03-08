const funcioonAsync = async () => {
  const promesa = new Promise((resolve, reject) => {
    if (false) {
      setTimeout(() => {
        resolve("Eureka");
      }, 2500);
    } else {
      reject("Algo salio mal");
    }
  });
  return promesa;
};

funcioonAsync()
  .then((resp) => {
    console.log(`Respuesta ${resp}`);
  })
  .catch((error) => console.log("Error la promesa: ", error));
