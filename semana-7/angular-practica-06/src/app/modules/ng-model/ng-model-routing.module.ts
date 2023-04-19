import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgModelComponent } from './pages/ng-model/ng-model.component';

const routes: Routes = [
  {
    path: '',
    component: NgModelComponent,
    title: 'Ng Model',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgModelRoutingModule {}
