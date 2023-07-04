import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IConsulta } from '../interfaces/consulta.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  listConsultas: IConsulta[] = [];
  url: string = 'http://localhost:8080';
  getConsultas() {
    return this.http.get<IConsulta[]>('http://localhost:8080/consulta').subscribe((resp) => {
      this.listConsultas = resp;
    })
  }

  generarConsultaPdf() {
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
    }
    return this.http.get<Blob>(`${this.url}/consulta/pdf`, httpOptions)
  }

}
