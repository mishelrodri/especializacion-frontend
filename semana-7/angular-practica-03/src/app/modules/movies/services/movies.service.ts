import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieI } from '../interfaces/MovieInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {
    console.log('funciona');
  }

  getMovie() {
    return this.http.get('https://api.jikan.moe/v4/random/manga');
  }
}
