"use strict";
const elMenu = document.querySelector("#accordionMenu");
const cargarMenu = async () => {
    const resultado = await fetch("./data/menu.json");
    const menu = await resultado.json();
    console.log(menu);
    let agregar = "";
    let cont = 0;
    for (const op of menu) {
        cont++;
        agregar += `<div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
    <button class="accordion-button collapsed"
    type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${cont}"
    aria-expanded="false" aria-controls="flush-collapse${cont}">
    <i class="${op.icon}"></i> ${op.label}
    </button>
    </h2>
    <div id="flush-collapse${cont}" class="accordion-collapse collapse"
    aria-labelledby="flush-heading${cont}" data-bs-parent="#accordionFlushExample">
    <div class="p-3" id="subItem${cont}" >
    </div>
    </div>
    </div>`;
        if (elMenu !== null) {
            elMenu.innerHTML = agregar;
        }
        console.log();
    }
    let contador = 0;
    for (const op of menu) {
        contador++;
        const subItems = document.querySelector(`#subItem${contador}`);
        let item = "";
        for (const sub of op.subItems) {
            item += `
            <a class="dropdown-item active" href=${sub.link}>${sub.label}</a>
            `;
        }
        if (subItems !== null) {
            subItems.innerHTML = item;
        }
    }
};
cargarMenu();
