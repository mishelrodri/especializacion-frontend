import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private http: HttpClient) {
    console.log('El servicio funciona');
  }

  getPlanetary() {
    return this.http.get(
      `https://api.nasa.gov/planetary/apod?start_date=2023-04-1&api_key=${environment.API_KEY}`
    );
  }
}
