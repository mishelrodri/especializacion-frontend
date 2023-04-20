import { Component, OnInit, Input } from '@angular/core';
import { MangaI } from '@modules/home/Interfaces/MangaInterface';

@Component({
  selector: 'app-card-manga',
  templateUrl: './card-manga.component.html',
  styleUrls: ['./card-manga.component.scss'],
})
export class CardMangaComponent implements OnInit {
  @Input() obj!: MangaI;

  constructor() {}

  ngOnInit(): void {}
}
