import { Component, Input, OnInit } from '@angular/core';
import { ICliente } from '../interface/ClienteInterface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  @Input()
  listaClientes: ICliente[] = [];
}
