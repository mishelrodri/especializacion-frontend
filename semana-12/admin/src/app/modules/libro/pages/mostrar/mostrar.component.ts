import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  offset = 0;

  term: string = '';

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Libro' }, { label: 'Mostrar', active: true }];
  }

  get listBiblioteca() {
    return '';
    // return this.bibliotecaService.listaBiblioteca;
  }


}
