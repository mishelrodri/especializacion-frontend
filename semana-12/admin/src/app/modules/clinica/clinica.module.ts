import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicaRoutingModule } from './clinica-routing.module';
import { ListarComponent } from './pages/consulta/listar/listar.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    ClinicaRoutingModule,
    PdfViewerModule
  ]
})
export class ClinicaModule { }
