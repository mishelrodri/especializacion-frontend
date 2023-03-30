import { Component, OnInit } from '@angular/core';
import { GetpetsService } from '../../services/getpets.service';
import { IMascota } from '../../interface/mascotas.interface';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  mascotas: IMascota[] = []; // array de mascotas
  parametrosBuscar: string = ''; //parametro de busqueda

  constructor(private mascotaService: GetpetsService) {
    // console.log(mascotas.getMascotas());
  }

  ngOnInit(): void {
    this.mascotaService.mascotas.subscribe((resp: any) => {
      this.mascotas = resp;
    });
  }

  buscar(): void {
    this.mascotaService
      .buscarMascota(this.parametrosBuscar)
      .subscribe((resp) => {
        this.mascotas = resp;
      });
  }
}
