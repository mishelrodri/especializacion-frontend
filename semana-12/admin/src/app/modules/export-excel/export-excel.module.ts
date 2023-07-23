import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportExcelRoutingModule } from './export-excel-routing.module';
import { Base64Component } from './pages/base64/base64.component';
import { FormsModule } from '@angular/forms';
import { ExcelComponent } from './pages/excel/excel.component';
import { ReadExcelComponent } from './components/read-excel/read-excel.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    Base64Component,
    ExcelComponent,
    ReadExcelComponent
  ],
  imports: [
    CommonModule,
    ExportExcelRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class ExportExcelModule { }
