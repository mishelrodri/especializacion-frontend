import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiMangasRoutingModule } from './api-mangas-routing.module';
import { MangaComponent } from './pages/manga/manga.component';


@NgModule({
  declarations: [
    MangaComponent
  ],
  imports: [
    CommonModule,
    ApiMangasRoutingModule
  ]
})
export class ApiMangasModule { }
