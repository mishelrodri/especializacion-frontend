import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CardComponent } from './component/card/card.component';


@NgModule({
  declarations: [
    PaginationComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    InfiniteScrollModule,

  ],

})
export class PhotosModule { }
