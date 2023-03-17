import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoComponent } from './alumno/alumno.component';

@NgModule({
  // componentes que utilizará
  declarations: [AlumnoComponent],
  // modulos de angular a utilizar
  imports: [CommonModule],
  // componnetes del modulo que se exportarán para ser utilizados
  exports: [AlumnoComponent],
})
export class AlumnosModule {}
