import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BusquedaModule } from '../busqueda/busqueda.module';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, BusquedaModule, FormsModule],
  exports: [SideBarComponent],
})
export class SharedModule {}
