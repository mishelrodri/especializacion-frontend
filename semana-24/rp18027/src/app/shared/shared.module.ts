import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { GraficaComponent } from './components/grafica/grafica.component';




@NgModule({
  declarations: [

    GraficaComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports:[
    GraficaComponent
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ]
})
export class SharedModule { }
