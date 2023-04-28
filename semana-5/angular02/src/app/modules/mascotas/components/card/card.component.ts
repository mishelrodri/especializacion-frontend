import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { GetpetsService } from '@modules/mascotas/services/getpets.service';
import { ToastrService } from 'ngx-toastr';
import { API_PETS } from 'src/app/constants/routes/routes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  //agregar el decorador @input, para recibir objetos de tipo mascota
  @Input() obj!: IMascota;
  // TODO: Para enviar la accion de eliminar al padre utilizamos el decorador Output
  @Output() eliminar = new EventEmitter<IMascota>();

  pets = API_PETS;

  constructor(
    private mascotaService: GetpetsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  eliminarPets(obj: IMascota) {
    this.eliminar.emit(
      obj
    ); /* para enviar la accion al componente padre, enviamos el id a eliminar */
  }
}
