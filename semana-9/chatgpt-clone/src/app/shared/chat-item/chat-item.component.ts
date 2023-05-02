import { Component, OnInit, Input } from '@angular/core';
import { conversacion } from 'src/app/interfaces/ChatgptI';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {
  @Input() obj!: conversacion;
  constructor() { }

  ngOnInit(): void {
  }

}
