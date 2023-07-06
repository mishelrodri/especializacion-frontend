import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Base64Component } from './pages/base64/base64.component';
import { ExcelComponent } from './pages/excel/excel.component';

const routes: Routes = [
  {
    path:'imagen',
    component:Base64Component
  },
  {
    path:'excel',
    component:ExcelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportExcelRoutingModule { }
