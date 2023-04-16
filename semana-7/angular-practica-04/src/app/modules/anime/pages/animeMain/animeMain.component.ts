import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { AnimeI } from '../../Interfaces/AnimeInterface';

@Component({
  selector: 'app-animeMain',
  templateUrl: './animeMain.component.html',
  styleUrls: ['./animeMain.component.scss'],
})
export class AnimeMainComponent implements OnInit {
  constructor(private animeService: AnimeService) {}

  anime: AnimeI = {
    anime: '',
    character: '',
    quote: '',
  };

  ngOnInit() {
    this.animeService.getAnime().subscribe((resp: any) => {
      this.anime = resp;
      console.log(resp);
    });
  }
}
