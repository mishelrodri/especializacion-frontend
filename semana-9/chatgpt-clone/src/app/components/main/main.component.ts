import { Component, OnInit } from '@angular/core';
import { ChatgptService } from 'src/app/services/chatgpt.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private chatgptService: ChatgptService) { }

  ngOnInit(): void {
  }

  get conversacion() {
    return this.chatgptService.listaQuotes;
  }

}
