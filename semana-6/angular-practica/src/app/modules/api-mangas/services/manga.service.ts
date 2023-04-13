import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  constructor(private http: HttpClient) {
    console.log('servicio funcionaa');
  }

  getManga() {
    // return this.http.get('https://api.jikan.moe/v4/random/manga');
    return this.http.get('https://api.jikan.moe/v4/manga');
  }
}
