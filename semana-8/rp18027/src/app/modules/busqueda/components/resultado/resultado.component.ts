import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { PhotoI } from '../../Interfaces/PhotosInterface';

// export const resultados: PhotoI[]=[];

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss'],
})
export class ResultadoComponent implements OnInit {
  // list: PhotoI[] = [];
  constructor(private photoService: PhotoService) {}
  mostarrLoader: boolean = false;
  ngOnInit(): void {}

  get list(): PhotoI[] {
    return this.photoService.listaFiltrada;
  }

  get mostrarLoader() {
    return this.photoService.mostrar;
  }
}
