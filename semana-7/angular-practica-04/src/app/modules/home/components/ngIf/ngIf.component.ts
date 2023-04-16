import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngIf',
  templateUrl: './ngIf.component.html',
  styleUrls: ['./ngIf.component.scss'],
})
export class NgIfComponent implements OnInit {
  constructor() {}

  listHeroes = [
    '🕷️ Spider-Man',
    '🦇 Batman',
    '⚡ Flash',
    '🇺🇸 Captain America',
    '🦸‍♀️ Wonder Woman',
    '🦸‍♂️ Superman',
    '🕸️ Black Widow',
    '🦹‍♂️ Magneto',
    '🐍 Wolverine',
    '🦸‍♂️ Iron Man',
  ];

  list = this.listHeroes;
  op: boolean = true;

  changeData() {
    this.op = !this.op;
    this.list = this.op ? this.listHeroes : [];
  }

  ngOnInit() {}
}
