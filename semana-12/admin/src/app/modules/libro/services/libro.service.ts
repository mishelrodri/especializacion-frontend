import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Biblioteca, Libro } from '../interface/libro.interface';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) { }

  listLibros: Libro[] = [];
  listaBiblioteca: Biblioteca[] = [];
  total: number;

  url: string = "http://localhost:8080/api/libros";

  getBooks(p: number) {
    return this.http.get(`${this.url}/all?page=${p}`).subscribe((resp: any) => {
      this.listLibros = resp.content;
      this.total = resp.totalPages;
    });
  }


  deleteLibro(libro: Libro) {
    return this.http.delete(`${this.url}/${libro.id}`)
  }

  saveLibro(libro: Libro) {
    return this.http.post(`${this.url}`, libro)
  }

  editLibro(libro: Libro) {
    return this.http.put(`${this.url}/${libro.id}`, libro)
  }

  //EndPoint de biblioteca
  getBibliotecas() {
    return this.http.get("http://localhost:8080/api/biblioteca/onlybibliotecas").subscribe((resp: any) => {
      this.listaBiblioteca = resp;
      console.log(this.listaBiblioteca)
    });
  }


}
