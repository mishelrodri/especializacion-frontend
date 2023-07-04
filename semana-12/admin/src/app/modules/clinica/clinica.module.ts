import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicaRoutingModule } from './clinica-routing.module';
import { ListarComponent } from './pages/consulta/listar/listar.component';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    ClinicaRoutingModule
  ]
})
export class ClinicaModule { }
