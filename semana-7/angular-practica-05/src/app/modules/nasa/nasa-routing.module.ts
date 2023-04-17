import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NasaComponent } from './pages/nasa/nasa.component';

const routes: Routes = [
  {
    path: '',
    component: NasaComponent,
    title: 'Nasa',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NasaRoutingModule {}
