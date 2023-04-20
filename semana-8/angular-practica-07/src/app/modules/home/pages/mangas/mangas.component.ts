import { Component, OnInit } from '@angular/core';
import { MangaI } from '@modules/home/Interfaces/MangaInterface';
import { MangaService } from '@modules/home/services/manga.service';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.scss'],
})
export class MangasComponent implements OnInit {
  constructor(private mangaService: MangaService) {}
  list: MangaI[] = [];
  ngOnInit(): void {
    this.mangaService.getManga().subscribe((resp: any) => {
      this.list = resp.data;
      // console.log(resp);
    });
  }
}
