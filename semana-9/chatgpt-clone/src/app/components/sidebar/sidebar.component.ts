import { Component, OnInit } from '@angular/core';
import { conversacion } from 'src/app/interfaces/ChatgptI';
import { ChatgptService } from 'src/app/services/chatgpt.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private chatgptService: ChatgptService) { }
  buscadas: conversacion[] = [];
  ngOnInit(): void {
  }

  get isOpenMenu() {
    return this.chatgptService.openMenu;
  }

  closeMenu() {
    return this.chatgptService.openMenu = !this.chatgptService.openMenu;

  }

  get history() {
    return this.buscadas = this.chatgptService.listaQuotes.filter((item) => item.user)
  }

}
