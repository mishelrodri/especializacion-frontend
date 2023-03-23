import { Component, OnInit, Input } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';
import { ListaComponent } from '../lista/lista.component';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  // @Input()
  // listaClientes: ICliente[] = [];

  nuevoCliente: ICliente = {
    nombre: '',
    telefono: '',
  };

  constructor(private clienteService: ClienteService) {}

  agregar(): void {
    if (
      this.nuevoCliente.nombre.trim().length === 0 ||
      this.nuevoCliente.telefono.trim().length === 0
    ) {
      return;
    }
    // console.log(this.listaClientes);
    // this.listaClientes.push(this.nuevoCliente);
    this.clienteService.agregarCliente(this.nuevoCliente);

    this.nuevoCliente = {
      nombre: '',
      telefono: '',
    };
    // document.querySelector('form')?.reset();
  }
}
