import { Component, OnInit,Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-grafica-b',
  templateUrl: './grafica-b.component.html',
  styleUrls: ['./grafica-b.component.scss']
})
export class GraficaBComponent implements OnInit {

@Input() series:[]=[];
@Input() title:string;

  constructor() { }

  ngOnInit(): void {
  }

}
