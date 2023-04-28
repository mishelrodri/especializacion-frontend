import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/modules/busqueda/services/photo.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  list: string[] = [];
  constructor(private photoService: PhotoService) {}

  filtrar(item: string) {
    this.photoService.PhotoFilter(item).subscribe((resp: any) => {
      this.photoService.listaFiltrada = resp;
      console.log(this.photoService.listaFiltrada);
    });
  }

  ngOnInit(): void {
    this.list = this.photoService.busquedas;
    console.log(this.list);

    // this.list=this.list.splice(0,9);
    // this.list.splice(0,10);
  }
}
