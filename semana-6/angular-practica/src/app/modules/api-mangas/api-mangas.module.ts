import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiMangasRoutingModule } from './api-mangas-routing.module';
import { MangaComponent } from './pages/manga/manga.component';
import { CardMangaComponent } from './components/cardManga/cardManga.component';
import { MangaService } from './services/manga.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MangaComponent, CardMangaComponent],
  imports: [CommonModule, ApiMangasRoutingModule, HttpClientModule],
  providers: [MangaService],
})
export class ApiMangasModule {}
