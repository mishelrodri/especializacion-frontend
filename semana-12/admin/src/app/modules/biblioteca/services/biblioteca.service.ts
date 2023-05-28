import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Biblioteca } from '../interfaces/Biblioteca.interface';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  listaBiblioteca: Biblioteca[] = [];

  constructor(private http: HttpClient) { }

  //EndPoint de biblioteca
  getBibliotecas() {
    return this.http.get("http://localhost:8080/api/biblioteca").subscribe((resp: any) => {
      this.listaBiblioteca = resp.content;
      console.log(this.listaBiblioteca)
    });
  }


}
