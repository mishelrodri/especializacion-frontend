import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './contenido/contenido.component';

@NgModule({
  declarations: [ContenidoComponent],
  imports: [CommonModule],
  exports: [ContenidoComponent],
})
export class MainModule {}
