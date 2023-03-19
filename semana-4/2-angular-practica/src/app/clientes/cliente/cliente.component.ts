import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interface/ClienteInterface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  listaClientes: ICliente[] = [
    {
      nombre: 'Mishel Rodriguez',
      telefono: '1234-3455',
    },
    {
      nombre: 'Keiry Rodriguez',
      telefono: '8766-3455',
    },
    {
      nombre: 'Armando Paredes',
      telefono: '9747-3455',
    },
  ];
}
