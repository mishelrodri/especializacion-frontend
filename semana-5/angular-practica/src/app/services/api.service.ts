import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {
    console.log('desde el servicio');
  }

  getMangas(): any {
    return this.http.get('https://api.jikan.moe/v4/random/manga');
  }
}
