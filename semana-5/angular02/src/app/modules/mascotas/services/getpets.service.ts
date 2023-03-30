import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMascota } from '../interface/mascotas.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetpetsService {
  listMascotas: IMascota[] = [];

  constructor(private http: HttpClient) {
    console.log('el servicio funciona');
  }

  get mascotas() {
    return this.http.get<IMascota[]>('http://localhost:3000/mascotas');
  }

  buscarMascota(termino: string): Observable<IMascota[]> {
    if (termino.length > 1) {
      return this.http.get<IMascota[]>(
        `http://localhost:3000/mascotas/?q=${termino}&_limit=5}`
      );
    } else {
      return this.http.get<IMascota[]>(`http://localhost:3000/mascotas`);
    }
  }
}
