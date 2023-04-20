import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  constructor(private http: HttpClient) {
    console.log('El servicio esta te funcionando');
  }

  getManga() {
    return this.http.get('https://api.jikan.moe/v4/manga?type=manhwa');
  }
}
