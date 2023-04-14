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
    // return this.http.get('http://localhost:3000/cancionesTaylorSwift');
    return this.http.get(
      'https://api.jsonbin.io/v3/b/6425dc3aace6f33a2200fa6a',
      {
        headers: {
          'X-MASTER-KEY':
            '$2b$10$QpJOAUnB12xF41/.jOMtJOwoH5ruJFeuT1jdCQjlFK0jXDSBq78yi',
        },
      }
    );
  }
}
