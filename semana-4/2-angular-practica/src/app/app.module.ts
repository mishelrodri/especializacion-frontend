import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { AlumnosModule } from './alumnos/alumnos.module';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  //declaracion de   componentes
  declarations: [AppComponent, AcumuladorComponent],
  // se importan los modulos que se utilizan
  imports: [BrowserModule, AlumnosModule, ClientesModule],
  // se agregan los servicios
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
