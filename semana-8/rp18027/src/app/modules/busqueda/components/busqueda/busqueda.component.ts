import { Component, OnInit, Output } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {



  constructor(private photoService:PhotoService) { }


  ngOnInit(): void {
  }

}
