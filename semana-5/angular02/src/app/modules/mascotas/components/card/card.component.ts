import { Component, Input, OnInit } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { API_PETS } from 'src/app/constants/routes/routes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  //agregar el decorador @input, para recibir objetos de tipo mascota
  @Input() obj!: IMascota;

  pets = API_PETS;
}
