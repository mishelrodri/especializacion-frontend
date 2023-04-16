import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgIfComponent } from './components/ngIf/ngIf.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
    children: [
      {
        path: 'ngIf',
        component: NgIfComponent,
        title: 'NgIf',
      },
      {
        path: 'ngFor',
        component: NgForComponent,
        title: 'NgFor',
      },
      {
        path: 'ngSwitch',
        component: NgSwitchComponent,
        title: 'NgSwitch',
      },
      {
        path: 'ngClass',
        component: NgClassComponent,
        title: 'NgClass',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
