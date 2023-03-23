import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewNewComponent } from './preview-new/preview-new.component';
import { NoticiasContainerComponent } from './noticias-container/noticias-container.component';

@NgModule({
  declarations: [PreviewNewComponent, NoticiasContainerComponent],
  imports: [CommonModule],
  exports: [NoticiasContainerComponent],
})
export class RelevantNewsModule {}
