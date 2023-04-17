import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';

const routes: Routes = [
  {
    path: '',
    component: DirectivasComponent,
    title: 'Directivas',
    children: [
      {
        path: 'NgFor',
        component: NgForComponent,
        title: 'NgFor',
      },
      {
        path: 'NgModel',
        component: NgModelComponent,
        title: 'NgModel',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivasRoutingModule {}
