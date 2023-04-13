import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaylorRoutingModule } from './taylor-routing.module';
import { TaylorComponent } from './pages/taylor/taylor.component';
import { HttpClientModule } from '@angular/common/http';
import { TaylorService } from './service/taylor.service';
import { CardTaylorComponent } from './components/card-taylor/card-taylor.component';

@NgModule({
  declarations: [TaylorComponent, CardTaylorComponent],
  imports: [CommonModule, TaylorRoutingModule, HttpClientModule],
  providers: [TaylorService],
})
export class TaylorModule {}
