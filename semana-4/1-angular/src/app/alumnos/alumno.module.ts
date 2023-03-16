import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlumnoComponent } from './alumno/alumno.component';

@NgModule({
  //decorador

  //METADATOS

  declarations: [AlumnoComponent],
  imports: [CommonModule],
  // queremos utilizar el componente fuera de ese modulo
  exports: [AlumnoComponent],
})
export class AlumnoModule {}
