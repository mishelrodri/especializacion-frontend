import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from "@ng-select/ng-select";
import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PedidoComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    SharedModule,
    FormsModule

  ]
})
export class PedidoModule { }
