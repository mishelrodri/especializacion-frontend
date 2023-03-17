import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  listaClientes: ICliente[] = [
    {
      nombre: 'Mishi',
      telefono: '4456-2456',
    },
    {
      nombre: 'Pyscho',
      telefono: '7654-2456',
    },
    {
      nombre: 'Miho',
      telefono: '3578-2456',
    },
    {
      nombre: 'Misaki',
      telefono: '2222-2456',
    },
  ];

  nuevoCliente: ICliente = {
    nombre: '',
    telefono: '',
  };

  //metodo
  agregar(): void {
    if (
      this.nuevoCliente.nombre.trim.length > 0 ||
      this.nuevoCliente.telefono.trim.length > 0
    ) {
      return;
    }
    this.listaClientes.push(this.nuevoCliente);
    this.nuevoCliente = {
      nombre: '',
      telefono: '',
    };
    console.log(this.listaClientes);
  }
}
