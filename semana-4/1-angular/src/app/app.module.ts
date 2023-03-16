// Por conevencion los primeros imports deben ser los deangulas
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { AlumnoComponent } from './alumnos/alumno/alumno.component';
import { AlumnoModule } from './alumnos/alumno.module';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  // VAN LOS COMPONNETES
  declarations: [AppComponent, AcumuladorComponent],
  //MODULOS
  imports: [BrowserModule, AlumnoModule, ClientesModule],
  //SERVICIOS
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
