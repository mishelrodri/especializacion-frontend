import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NgSelectModule } from "@ng-select/ng-select";
import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PedidoComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    NgSelectModule,
    ReactiveFormsModule
  ]
})
export class PedidoModule { }
