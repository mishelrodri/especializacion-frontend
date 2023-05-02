import { Component, OnInit } from '@angular/core';
import { conversacion } from 'src/app/interfaces/ChatgptI';
import { ChatgptService } from 'src/app/services/chatgpt.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  pregunta: string = '';
  constructor(private chatgptService: ChatgptService) { }

  ngOnInit(): void {
  }

  enviarPregunta() {
    const pregunta: conversacion = {
      user: true,
      body: this.pregunta
    }
    this.chatgptService.listaQuotes.push(pregunta);
    this.chatgptService.Quotes();
    this.pregunta = '';
  }

}
