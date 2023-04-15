import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieI } from '../../interfaces/MovieInterface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: MovieI = {
    mal_id: 1,
    images: {},
  };
  imageUrl: string = '';
  constructor(private movies: MoviesService) {}

  ngOnInit() {
    this.movies.getMovie().subscribe((resp: any) => {
      this.movie = resp.data;
      console.log(resp.data);
      this.imageUrl = this.movie.images['webp'].image_url ?? 'URL por defecto';
    });
  }
}
