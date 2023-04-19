import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  constructor(private http: HttpClient) {
    console.log('El servicio funciona');
  }

  searchManga(manga: string) {
    return this.http.get(`https://api.jikan.moe/v4/manga?q=${manga}`);
  }
}
