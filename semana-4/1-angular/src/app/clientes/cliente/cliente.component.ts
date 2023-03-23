import { Component, OnInit, NgModule } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  nombre: string = 'Mishel';
  telefono: string = '122334';

  // listaClientes: ICliente[] = [];

  constructor(private clienteService: ClienteService) {
    // this.listaClientes = clienteService.listaClientes;
  }

  get listaClientes(): ICliente[] {
    return this.clienteService.listaClientes;
  }
}
