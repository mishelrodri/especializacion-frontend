import { Injectable } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';

@Injectable()
export class ClienteService {
  // private listaClientes: ICliente[] = [ daria ERROR
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

  constructor() {
    console.log('Iniciando el servicio');
  }

  agregarCliente(cliente: ICliente) {
    this.listaClientes.push(cliente);
  }
}
