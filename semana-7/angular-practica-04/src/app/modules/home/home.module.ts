import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NgIfComponent } from './components/ngIf/ngIf.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';

@NgModule({
  declarations: [HomeComponent, NgIfComponent, NgForComponent, NgSwitchComponent, NgClassComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
