"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reloj = void 0;
class Reloj {
    constructor(tiempoBajoAgua, profundidadMaxima) {
        this.tiempoBajoAgua = tiempoBajoAgua;
        this.profundidadMaxima = profundidadMaxima;
    }
    mostrarInformacion() {
        console.log(` este reloj soporta ${this.tiempoBajoAgua} 
        minutos bajo el agua a una profundidad de ${this.profundidadMaxima}`);
    }
    agregar() {
        throw new Error("Method not implemented");
    }
    modificar() {
        throw new Error("Method not implemented");
    }
    borrar() {
        throw new Error("Method not implemented");
    }
    listarElementos() {
        throw new Error("Method not implemented");
    }
}
exports.Reloj = Reloj;
