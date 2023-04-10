import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaylorRoutingModule } from './taylor-routing.module';
import { TaylorComponent } from './pages/taylor/taylor.component';


@NgModule({
  declarations: [
    TaylorComponent
  ],
  imports: [
    CommonModule,
    TaylorRoutingModule
  ]
})
export class TaylorModule { }
