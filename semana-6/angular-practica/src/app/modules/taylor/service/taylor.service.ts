import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaylorService {
  constructor(private http: HttpClient) {
    console.log('El servicio funciona');
  }

  getAllSongs() {
    return this.http.get('http://localhost:3000/cancionesTaylorSwift');
  }
}
