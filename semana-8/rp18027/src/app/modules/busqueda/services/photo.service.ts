import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { photoAPI } from 'src/app/constants/constants';
import { PhotoI } from '../Interfaces/PhotosInterface';

// export  let listaFiltrada:PhotoI[]=[];

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  busquedas: string[] = [];
  mostrar: boolean = false;
  apiURL: string = photoAPI;

  listaFiltrada: PhotoI[] = [];

  constructor(private http: HttpClient) {
    console.log('El servicio funciona');
  }

  getPhotos() {
    return this.http.get(this.apiURL);
  }

  PhotoFilter(busqueda: string) {
    if (!this.busquedas.includes(busqueda)) {
      this.busquedas.unshift(busqueda);
    }
    this.busquedas.splice(9, 100);
    return this.http.get(`${this.apiURL}?q=${busqueda}`);
  }
}
