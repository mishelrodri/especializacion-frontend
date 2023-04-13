import { Component, Input, OnInit } from '@angular/core';
import { ITaylor } from '../../interfaces/ITaylor';

@Component({
  selector: 'app-card-taylor',
  templateUrl: './card-taylor.component.html',
  styleUrls: ['./card-taylor.component.scss'],
})
export class CardTaylorComponent {
  @Input()
  song!: ITaylor; //TODO: ! Significa => se utiliza para indicar que la propiedad "song" no es nula y que siempre tiene un valor asignado. Esto se utiliza comúnmente en Angular para evitar errores de compilación relacionados con la posible presencia de

  constructor() {}
}
