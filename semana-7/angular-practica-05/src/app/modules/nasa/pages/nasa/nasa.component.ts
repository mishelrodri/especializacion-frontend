import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../services/nasa.service';
import { NasaI } from '../../interfaces/NasaInterface';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss'],
})
export class NasaComponent implements OnInit {
  constructor(private nasaService: NasaService) {}
  list: NasaI[] = [];

  ngOnInit(): void {
    this.nasaService.getPlanetary().subscribe((resp: any) => {
      this.list = resp;
      console.log(resp);
    });
  }
}
