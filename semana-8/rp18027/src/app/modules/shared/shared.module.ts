import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SideBarComponent } from './components/side-bar/side-bar.component';
import { busquedas } from '../busqueda/components/input/input.component';
import { PhotoService } from '../busqueda/services/photo.service';
import { BusquedaModule } from '../busqueda/busqueda.module';



@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    busquedas,
    BusquedaModule,
    FormsModule
  ],
  exports:[
    SideBarComponent
  ]

})
export class SharedModule { }
