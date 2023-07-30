import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './pages/pedido/pedido.component';

const routes: Routes = [
  {
    path:'',
    component:PedidoComponent,
    title:'pedido'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
