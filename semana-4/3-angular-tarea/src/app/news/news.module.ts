import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { NoticiasComponent } from './noticias/noticias.component';

@NgModule({
  declarations: [NewComponent, NoticiasComponent],
  imports: [CommonModule],
  exports: [NoticiasComponent],
})
export class NewsModule {}
