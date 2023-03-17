import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: 'alumno.component.html',
})
export class AlumnoComponent {
  nombre: string = 'Kely Mishel Rodriguez';
  edad: number = 22;

  mostrarInformacion(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  //OJITO QUE LOS METODOS GET NO LLEVAN TIPO
  get obtenerCapitalizado() {
    return this.nombre.toLocaleUpperCase();
  }

  cambiarDatos(): void {
    this.nombre = 'Jorge Gonzales';
    this.edad = 99;
  }
}
