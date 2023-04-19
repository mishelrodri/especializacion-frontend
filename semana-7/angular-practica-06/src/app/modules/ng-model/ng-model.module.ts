import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgModelRoutingModule } from './ng-model-routing.module';
import { NgModelComponent } from './pages/ng-model/ng-model.component';

@NgModule({
  declarations: [NgModelComponent],
  imports: [CommonModule, NgModelRoutingModule, FormsModule],
})
export class NgModelModule {}
