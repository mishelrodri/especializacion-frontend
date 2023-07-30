import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path:'',
    component:SkeletonComponent,
    title:'La Constancia',
    children:[
      {
        path: '',
        loadChildren: () => import('@home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'pedido',
        loadChildren: () => import('@pedido/pedido.module').then(m => m.PedidoModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
