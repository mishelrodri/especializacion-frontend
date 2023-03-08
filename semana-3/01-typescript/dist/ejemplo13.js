"use strict";
const menu = [
    {
        id: 1,
        label: "EMPLEADOS",
        icon: "bi bi-person-fill",
        subItems: [
            {
                id: 2,
                label: "LISTAR",
                link: "/empleado/listar",
                parentId: 1,
            },
            {
                id: 3,
                label: "NUEVO",
                link: "/empleado/detalle/",
                parentId: 1,
            },
        ],
    },
    {
        id: 4,
        label: "PRODUCTOS",
        icon: "bi bi-yelp",
        subItems: [
            {
                id: 5,
                label: "LISTAR",
                link: "/productos/listar",
                parentId: 4,
            },
            {
                id: 6,
                label: "NUEVO",
                link: "/productos/nuevo",
                parentId: 4,
            },
            {
                id: 7,
                label: "CARRETILLA",
                link: "/productos/carretilla",
                parentId: 4,
            },
        ],
    },
    {
        id: 8,
        label: "GRÀFICAS",
        icon: "bi bi-activity",
        subItems: [
            {
                id: 9,
                label: "PASTEL",
                link: "/graficas/pastel",
                parentId: 8,
            },
            {
                id: 10,
                label: "BARRA",
                link: "/graficas/barra",
                parentId: 8,
            },
        ],
    },
    {
        id: 11,
        label: "PROYECTOS",
        icon: "bi bi-pin",
        subItems: [
            {
                id: 12,
                label: "LISTAR",
                link: "/proyectos/proyecto",
                parentId: 11,
            },
            {
                id: 13,
                label: "EJECUCIÒN",
                link: "/proyectos/ejecucion",
                parentId: 11,
            },
            {
                id: 14,
                label: "RECHAZADOS",
                link: "/proyectos/rechazados",
                parentId: 11,
            },
            {
                id: 15,
                label: "APROBADOS",
                link: "/proyectos/aprobados",
                parentId: 11,
            },
        ],
    },
];
const mnuStr = JSON.stringify(menu);
console.log(JSON.parse(mnuStr));
const opcion = {
    id: 12,
    label: "usuarios",
    icon: "bi bi-person-fill",
    subItems: [],
};
menu.push(opcion);
console.log(menu);
menu[menu.length - 1].subItems.unshift({
    id: 13,
    label: "LISTAR",
    link: "/usuarios/listar",
    parentId: 12,
});
console.log(menu);
for (const x of menu) {
    console.log(x.label + " " + x.subItems[0].label);
}
