document.getElementsByTagName("title")[0].innerHTML = "cursos";
// document.title = "JEJE";
const divTop = document.getElementById("top");

const h1 = document.createElement("h1");

h1.innerHTML = " Modificando del DOM";

divTop.appendChild(h1);

const items = document.getElementsByClassName("list-item");

for (let index = 0; index < items.length; index++) {
    if (index % 2 === 0) {
        let elemento = items[index];
        elemento.style.background = "#f2f2f2";

    }
}


const element = document.querySelector("#idCurso");

console.log(element)

const elementA = document.querySelector(".list-item")