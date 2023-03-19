import { Component, Input, OnInit } from '@angular/core';
import { ICliente } from '../interface/ClienteInterface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Input()
  listaClientes: ICliente[] = [];
  nuevoCliente: ICliente = {
    nombre: '',
    telefono: '',
  };
  agregar() {
    this.listaClientes.push(this.nuevoCliente);
    this.nuevoCliente = {
      nombre: '',
      telefono: '',
    };
  }
}
