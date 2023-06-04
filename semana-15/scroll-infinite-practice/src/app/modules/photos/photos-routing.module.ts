import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from './pages/pagination/pagination.component';

const routes: Routes = [
  {
    path: '',
    component: PaginationComponent,
    title: 'Photos'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
