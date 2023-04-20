import { Component, OnInit,Input } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { PhotoI } from '../../Interfaces/PhotosInterface';

// export const resultados: PhotoI[]=[];


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  @Input() lista!:PhotoI[];
  list:PhotoI[]=[];
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    // this.photoService.getPhotos().subscribe((resp:any)=>{
    //   this.list=resp;
    // });
    // this.list=this.photoService.listaFiltrada;
  }

}
