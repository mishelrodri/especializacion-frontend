import { Component, OnInit } from '@angular/core';
import { MangaService } from '../../services/manga.service';
import { MangaI } from '../../interfaces/mangaInterface';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss'],
})
export class MangaComponent implements OnInit {
  constructor(private mangaService: MangaService) {}

  mangas: MangaI[] = [];

  ngOnInit(): void {
    this.mangaService.getManga().subscribe((resp: any) => {
      const { data } = resp;
      this.mangas = data;
      console.log(data);
    });
  }
}
