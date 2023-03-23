import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivasRoutingModule } from './directivas-routing.module';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { NgClassComponent } from './pages/ng-class/ng-class.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';


@NgModule({
  declarations: [
    NgIFComponent,
    NgForComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent
  ],
  imports: [
    CommonModule,
    DirectivasRoutingModule
  ]
})
export class DirectivasModule { }
