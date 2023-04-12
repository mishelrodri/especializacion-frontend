import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMascota } from '../interface/mascotas.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetpetsService {
  private baseUrl: string = environment.baseUrl;

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

  buscarMascotaId(termino: string): Observable<IMascota> {
    return this.http.get<IMascota>(`http://localhost:3000/mascotas/${termino}`);
  }

  eliminarMascotaId(termino: string): Observable<IMascota> {
    return this.http.delete<IMascota>(
      `http://localhost:3000/mascotas/${termino}`
    );
  }

  Allmascotas(): any {
    // return this.http.get<IMascota[]>('http://localhost:3000/mascotas');
    return new Promise((resolve) => {
      this.http.get(`${this.baseUrl}`).subscribe((data) => {
        resolve(data);
      });
    });
  }

  obtenetpetsId(id: string): any {
    return new Promise((resolve) => {
      this.http.get<IMascota>(`${this.baseUrl}/${id}`).subscribe((data) => {
        resolve(data);
      });
    });
  }
}
