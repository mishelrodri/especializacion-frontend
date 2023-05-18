import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AnimeRoutingModule } from './anime-routing.module';
import { CardComponent } from './card/card.component';
import { ListarComponent } from './pages/listar/listar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { TablaComponent } from './pages/tabla/tabla.component';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    CardComponent,
    ListarComponent,
    BuscarComponent,
    TablaComponent,
    MostrarComponent
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule,
    InfiniteScrollModule,
    HttpClientModule,
    ReactiveFormsModule,
    UIModule, //para las migas
    FormsModule, //para los ngModel
    NgxPaginationModule, // para paginar
    Ng2SearchPipeModule


  ]
})
export class AnimeModule { }
