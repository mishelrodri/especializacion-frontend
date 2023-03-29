import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent {
  cancionesTaylorSwift = [
    {
      titulo: 'Love Story',
      album: 'Fearless',
      anio: 2008,
      duracion: '3:55',
      genero: 'Country pop',
    },
    {
      titulo: 'You Belong With Me',
      album: 'Fearless',
      anio: 2008,
      duracion: '3:52',
      genero: 'Pop rock',
    },
    {
      titulo: 'Shake It Off',
      album: '1989',
      anio: 2014,
      duracion: '3:39',
      genero: 'Pop',
    },
    {
      titulo: 'Blank Space',
      album: '1989',
      anio: 2014,
      duracion: '3:51',
      genero: 'Electropop',
    },
    {
      titulo: 'Bad Blood',
      album: '1989',
      anio: 2014,
      duracion: '3:19',
      genero: 'Electropop',
    },
    {
      titulo: 'We Are Never Ever Getting Back Together',
      album: 'Red',
      anio: 2012,
      duracion: '3:11',
      genero: 'Pop',
    },
    {
      titulo: 'I Knew You Were Trouble',
      album: 'Red',
      anio: 2012,
      duracion: '3:39',
      genero: 'Electropop',
    },
    {
      titulo: 'Style',
      album: '1989',
      anio: 2014,
      duracion: '3:51',
      genero: 'Synth-pop',
    },
    {
      titulo: 'Delicate',
      album: 'Reputation',
      anio: 2017,
      duracion: '3:52',
      genero: 'Electropop',
    },
    {
      titulo: 'Lover',
      album: 'Lover',
      anio: 2019,
      duracion: '3:41',
      genero: 'Pop',
    },
  ];
  constructor() {}
}
