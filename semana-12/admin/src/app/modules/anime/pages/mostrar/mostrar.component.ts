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

  //! PARA LAS GRAFICAS
  labels:string[]=[];
  dataGrafica=[];
  colors=[{backgroundColor:[]}];

  constructor(private animeService: AnimeService) { }


  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Anime' }, { label: 'Mostrar', active: true }];
    this.getCards();
  }


  getCards(nombreCard: string | null = null) {
    this.animeService.getCardsAnimeForma2(nombreCard, this.offset).subscribe((res) => {
      console.log(res)
      this.cards = [...this.cards, ...res];
      this.graficar();
    })
  }

  graficar() {
    let grupos={};
    //agrupar por tipos
    this.cards.forEach(card => {
      const llave=card.type;
      if(!grupos[llave]){
        grupos[llave]=[];
      }
      grupos[llave].push(card);

    });
    console.log(grupos)
    let keyColor='backgroundColor';
    for(const key in grupos){
      this.labels.push(key);
      this.colors[0][keyColor].push(this.colorHexadecimal());
      this.dataGrafica.push(grupos[key].length)
    }
    console.log(this.labels, this.dataGrafica)
  }


  generarLetra(){
    let letra=['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
    let numero=(Math.random()*15).toFixed(0);
    return letra[numero];
  }

  colorHexadecimal(){
    let color="";
    for(let i=0;i<6;i++){
      color=color+this.generarLetra();
    }

    return "#"+color;
  }

}
