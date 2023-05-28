import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../../services/biblioteca.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {


  breadCrumbItems: Array<{}>;
  offset = 0;

  term: string = '';

  constructor(private bibliotecaService: BibliotecaService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Empleado' }, { label: 'Mostrar', active: true }];
    this.bibliotecaService.getBibliotecas();
  }

  get listBiblioteca() {
    return this.bibliotecaService.listaBiblioteca;
  }


}
