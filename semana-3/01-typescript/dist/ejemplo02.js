"use strict";
class Medicamento {
    constructor(codigo, nombreGenerico, fechaVencimiento) {
        this.getFechaVencimiento = () => {
            return this.fechaVencimiento;
        };
        this.codigo = codigo;
        this.nombreGenerico = nombreGenerico;
        this.fechaVencimiento = fechaVencimiento;
    }
    getCodigo() {
        return this.codigo;
    }
    get nameGenerico() {
        return this.nombreGenerico;
    }
    static disponibilidadMedicamento() {
        return "Medicamento disponible";
    }
}
let medicamento = new Medicamento(1, "Acetaminofen", new Date("2023-3-8"));
console.log(`Codigo: ${medicamento.getCodigo()}`);
console.log(`Nombre: ${medicamento.nameGenerico}`);
const vencimiento = medicamento.getFechaVencimiento;
console.log(vencimiento());
console.log(`Disponibilidad : ${Medicamento.disponibilidadMedicamento()}`);
