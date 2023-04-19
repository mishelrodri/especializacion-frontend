import { Component, OnInit } from '@angular/core';
import { MangaService } from '../../services/manga.service';
import { MangaI } from '../../interfaces/MangaInterface';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss'],
})
export class MangaComponent implements OnInit {
  constructor(private mangaService: MangaService) {}
  manga: string = 'Busca un Manga';
  list: MangaI[] = [];
  buscarManga() {
    this.mangaService.searchManga(this.manga).subscribe((resp: any) => {
      console.log(resp);
      this.list = resp.data;
    });
  }

  ngOnInit(): void {}
}
