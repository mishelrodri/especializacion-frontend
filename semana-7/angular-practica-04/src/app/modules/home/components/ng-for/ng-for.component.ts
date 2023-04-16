import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent implements OnInit {
  list: string[] = [
    '🐶 Perro',
    '🐶 Perro',
    '🐱 Gato',
    '🐻 Oso',
    '🐘 Elefante',
    '🐯 Tigre',
    '🦁 León',
    '🐨 Koala',
    '🦊 Zorro',
    '🐰 Conejo',
    '🐍 Serpiente',
  ];

  elemento: HTMLElement | undefined;
  elementoSeleccionado: HTMLElement | undefined;

  seleccionarElemento(target: HTMLElement) {
    this.elementoSeleccionado = target;
  }
  constructor() {}

  ngOnInit(): void {}
}
