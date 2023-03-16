import { Component, OnInit, Input } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';
import { ListaComponent } from '../lista/lista.component';

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

  agregar(): void {
    if (
      this.nuevoCliente.nombre.trim().length === 0 ||
      this.nuevoCliente.telefono.trim().length === 0
    ) {
      return;
    }
    // console.log(this.listaClientes);
    this.listaClientes.push(this.nuevoCliente);
    this.nuevoCliente = {
      nombre: '',
      telefono: '',
    };
    // document.querySelector('form')?.reset();
  }
}
