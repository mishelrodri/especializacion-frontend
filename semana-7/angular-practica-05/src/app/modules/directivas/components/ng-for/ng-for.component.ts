import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/Persona';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent implements OnInit {
  list: Persona[] = [
    {
      nombre: 'kely',
      edad: 23,
      genero: 'Femenino',
    },
    {
      nombre: 'Ramon',
      edad: 23,
      genero: 'Femenino',
    },
    {
      nombre: 'Carlos',
      edad: 23,
      genero: 'Masculino',
    },
  ];

  quitar(index: number) {
    this.list = this.list.filter((resp, i) => i != index);
  }

  constructor() {}

  ngOnInit(): void {}
}
