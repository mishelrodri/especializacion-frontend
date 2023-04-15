import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { PruebaComponent } from './components/prueba/prueba.component';
import { MovieComponent } from './pages/movie/movie.component';

@NgModule({
  declarations: [PruebaComponent, MovieComponent],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
