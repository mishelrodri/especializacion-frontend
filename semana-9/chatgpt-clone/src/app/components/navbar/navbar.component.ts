import { Component, OnInit } from '@angular/core';
import { ChatgptService } from 'src/app/services/chatgpt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private chatgptService: ChatgptService) { }

  ngOnInit(): void {
  }

  openMenu() {
    return this.chatgptService.openMenu = !this.chatgptService.openMenu;
  }

}
