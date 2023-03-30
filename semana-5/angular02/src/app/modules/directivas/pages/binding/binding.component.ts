import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent {
  // propiedad disabled del input y el btn
  habilitar: boolean = false;

  clase: string = 'btn btn-danger';

  textPlaceHolder: string = 'Mishel Rodriguez';

  textType: string = 'radio';

  isChecked: boolean = true;

  cambiarPropiedad() {
    this.habilitar = !this.habilitar;
    this.textPlaceHolder = this.habilitar ? 'Deshabilitado' : 'Habilitado';
    this.textType = 'checkbox';
    this.isChecked = !this.isChecked;
    this.clase = this.habilitar ? 'btn btn-primary' : 'btn btn-danger';
  }
}
