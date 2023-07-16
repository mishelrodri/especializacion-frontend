import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubirImagenesComponent } from './components/subir-imagenes/subir-imagenes.component';

const routes: Routes = [
  {
    path:'',
    component:SubirImagenesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubirArchivosRoutingModule { }
