import { Component, OnInit, NgModule } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  nombre: string = 'Mishel';
  telefono: string = '122334';
  //constructor() { }

  listaClientes: ICliente[] = [
    {
      nombre: 'Armando Paredes',
      telefono: '7897-9833',
    },
    {
      nombre: 'Amanda Paredes',
      telefono: '7897-9833',
    },
    {
      nombre: 'Arandano Paredes',
      telefono: '7897-9833',
    },
  ];
}
