import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivasRoutingModule } from './directivas-routing.module';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DirectivasComponent, NgForComponent, NgModelComponent],
  imports: [CommonModule, DirectivasRoutingModule, FormsModule],
})
export class DirectivasModule {}
