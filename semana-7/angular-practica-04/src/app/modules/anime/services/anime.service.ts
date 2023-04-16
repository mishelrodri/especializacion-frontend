import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private http: HttpClient) {}

  getAnime() {
    return this.http.get('https://animechan.vercel.app/api/random');
  }
}
