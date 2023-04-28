import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { PhotoI } from '../../Interfaces/PhotosInterface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  busqueda: string = '';

  constructor(private photoService: PhotoService) {}
  filtrar() {
    this.photoService.listaFiltrada = [];
    if (this.busqueda.trim().length === 0) {
      this.photoService.mostrar = true;
      this.photoService.getPhotos().subscribe((resp: any) => {
        this.photoService.listaFiltrada = resp;
        this.photoService.mostrar = false;
      });
    } else {
      this.photoService.mostrar = true;
      this.photoService.PhotoFilter(this.busqueda).subscribe((resp: any) => {
        this.photoService.listaFiltrada = resp;
        this.photoService.mostrar = false;
        console.log(this.photoService.listaFiltrada);
      });
    }
  }

  ngOnInit(): void {}
}
