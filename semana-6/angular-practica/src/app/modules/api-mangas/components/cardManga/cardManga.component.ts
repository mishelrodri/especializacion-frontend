import { Component, Input, OnInit } from '@angular/core';
import { MangaI } from '../../interfaces/mangaInterface';

@Component({
  selector: 'app-cardManga',
  templateUrl: './cardManga.component.html',
  styleUrls: ['./cardManga.component.scss'],
})
export class CardMangaComponent implements OnInit {
  @Input() manga!: MangaI;

  constructor() {}

  ngOnInit() {}
}
