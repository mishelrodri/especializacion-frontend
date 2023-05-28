import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { ModalComponent } from './pages/modal/modal.component';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { TablaComponent } from './pages/tabla/tabla.component';


@NgModule({
  declarations: [
    MostrarComponent,
    TablaComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    UIModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ]
})
export class BibliotecaModule { }
