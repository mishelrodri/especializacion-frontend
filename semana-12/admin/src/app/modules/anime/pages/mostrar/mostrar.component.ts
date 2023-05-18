import { Component, OnInit } from '@angular/core';
import { IAnime } from '../../interface/anime';
import { AnimeService } from '../../service/anime.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  cards: IAnime[] = [];
  offset = 0;
  term: String = '';
  constructor(private animeService: AnimeService) { }


  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Anime' }, { label: 'Mostrar', active: true }];
    this.getCards();
  }


  getCards(nombreCard: string | null = null) {
    this.animeService.getCardsAnimeForma2(nombreCard, this.offset).subscribe((res) => {
      console.log(res)
      this.cards = [...this.cards, ...res];

    })
  }

}
