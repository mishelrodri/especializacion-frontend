import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';
import { BindingComponent } from './pages/binding/binding.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { NgClassComponent } from './pages/ng-class/ng-class.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'ngif', component: NgIFComponent, title: 'ngif' },
  { path: 'ngswitch', component: NgSwitchComponent, title: 'ngswitch' },
  { path: 'ngFor', component: NgForComponent, title: 'ngFor' },
  { path: 'binding', component: BindingComponent, title: 'binding' },
  { path: 'ngStyle', component: NgStyleComponent, title: 'ngStyle' },
  { path: 'ngClass', component: NgClassComponent, title: 'ngClass' },
  { path: 'ngModel', component: NgModelComponent, title: 'ngModel' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivasRoutingModule {}
