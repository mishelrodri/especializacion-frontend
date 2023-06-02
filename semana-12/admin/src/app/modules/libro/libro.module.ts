import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibroRoutingModule } from './libro-routing.module';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { ModalComponent } from './pages/modal/modal.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MostrarComponent,
    ModalComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    LibroRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    UIModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ]
})
export class LibroModule { }
