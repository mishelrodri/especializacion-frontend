import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { conversacion } from '../interfaces/ChatgptI';

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {

  openMenu: boolean = false;
  listaQuotes: conversacion[] = [];
  constructor(private http: HttpClient) {
    console.log('el servicio funciona')
  }

  Quotes() {
    this.http.get('https://animechan.vercel.app/api/random').subscribe((resp: any) => {
      const respuesta: conversacion = {
        user: false,
        body: resp.quote
      }
      this.listaQuotes.push(respuesta);
      console.log(this.listaQuotes)
    })
  }


}
