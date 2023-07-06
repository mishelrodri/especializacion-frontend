import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportExcelRoutingModule } from './export-excel-routing.module';
import { Base64Component } from './pages/base64/base64.component';
import { FormsModule } from '@angular/forms';
import { ExcelComponent } from './pages/excel/excel.component';


@NgModule({
  declarations: [
    Base64Component,
    ExcelComponent
  ],
  imports: [
    CommonModule,
    ExportExcelRoutingModule,
    FormsModule
  ]
})
export class ExportExcelModule { }
