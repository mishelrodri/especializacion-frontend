import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'ngif', component: NgIFComponent, title: 'ngif' },
  { path: 'ngswitch', component: NgSwitchComponent, title: 'ngswitch' },
  { path: 'ngFor', component: NgForComponent, title: 'ngFor' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivasRoutingModule {}
