import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { BusquedaModule } from './modules/busqueda/busqueda.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SharedModule,BusquedaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
