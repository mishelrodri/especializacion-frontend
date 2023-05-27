import { Component, OnInit } from '@angular/core';
import { IAnime } from '../../interface/anime';
import { AnimeService } from '../../service/anime.service';
import { ChartOptions } from '../../grafica-b/chartType.interface';

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
  labels: string[] = [];
  dataGrafica = [];
  colors = [{ backgroundColor: [] }];

  // TODO: Chart Apex
  dataApex: Partial<ChartOptions> = {
    series: [
      {
        name: "Series",
        data: []
      }
    ],
    chart: {
      height: 350,
      type: "bar"
    },
    title: {
      text: ""
    },
    xaxis: {
      categories: []
    }
  };


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
    let grupos = {};
    //agrupar por tipos
    this.cards.forEach(card => {
      const llave = card.type;
      if (!grupos[llave]) {
        grupos[llave] = [];
      }
      grupos[llave].push(card);

    });
    console.log(grupos)
    let keyColor = 'backgroundColor';

    //TODO: Grafica apexxx
    let keySeries = 'series';
    let data = 'data';
    let xaxis = 'xaxis';
    let categories = 'categories';
    //TODO

    for (const key in grupos) {
      this.labels.push(key);
      this.dataGrafica.push(grupos[key].length)
      this.colors[0][keyColor].push(this.colorHexadecimal());

      //TODO: Grafica apexxx
      this.dataApex[keySeries][0][data].push(grupos[key].length);
      this.dataApex[xaxis][categories].push(key);
    }
    this.dataApex.title.text = "Grafica de Anime";
    console.log(this.labels, this.dataGrafica)
  }


  generarLetra() {
    let letra = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let numero = (Math.random() * 15).toFixed(0);
    return letra[numero];
  }

  colorHexadecimal() {
    let color = "";
    for (let i = 0; i < 6; i++) {
      color = color + this.generarLetra();
    }

    return "#" + color;
  }

}
