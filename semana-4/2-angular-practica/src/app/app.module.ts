import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { AlumnooModule } from './alumnos/alumnos.module';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  //declaracion de   componentes
  declarations: [AppComponent, ContadorComponent],
  // se importan los modulos que se utilizan
  imports: [BrowserModule, AlumnooModule, ClientesModule],
  // se agregan los servicios
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
