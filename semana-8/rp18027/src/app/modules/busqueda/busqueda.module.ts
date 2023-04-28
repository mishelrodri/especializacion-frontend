import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './components/input/input.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { CardComponent } from './components/card/card.component';
import { PhotoService } from './services/photo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputComponent,
    BusquedaComponent,
    ResultadoComponent,
    CardComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [InputComponent, BusquedaComponent],
  providers: [PhotoService],
})
export class BusquedaModule {}
