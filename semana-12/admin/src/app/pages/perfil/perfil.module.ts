import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilCardComponent } from './perfil-card/perfil-card.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    PerfilCardComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
