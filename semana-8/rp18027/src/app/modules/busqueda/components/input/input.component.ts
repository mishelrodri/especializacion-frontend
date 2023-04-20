import { Component, OnInit,Input } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { PhotoI } from '../../Interfaces/PhotosInterface';

export let busquedas:string[]=[];

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {

  busqueda:string='';
  lista:PhotoI[]=[];

  filtrar(){

    if(this.busqueda.trim().length===0){
      return;
    }

    this.photoService.PhotoFilter(this.busqueda).subscribe((resp:any)=>{
      this.lista=resp;
      this.photoService.listaFiltrada=resp;
      console.log(this.photoService.listaFiltrada);

  });
    busquedas.unshift(this.busqueda);
    busquedas.splice(9,100);
  }

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {

  }

}
