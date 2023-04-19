import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MangaRoutingModule } from './manga-routing.module';
import { MangaComponent } from './pages/manga/manga.component';

@NgModule({
  declarations: [MangaComponent],
  imports: [CommonModule, MangaRoutingModule, FormsModule],
})
export class MangaModule {}
