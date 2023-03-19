import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
})
export class AlumnoComponentt {
  nombre = 'Mishel Rodriguez';
  edad = 22;
  mostrarInformacion() {
    return ` ${this.nombre} - ${this.edad}`;
  }

  get obtenerCapitalizado() {
    return this.nombre.toLocaleUpperCase();
  }

  cambiarDatos() {
    this.nombre = 'Kely Perdomo';
    this.edad = 23;
  }
}
