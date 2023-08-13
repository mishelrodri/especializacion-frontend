import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';



@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent  {

  @Input() labels:any[]=[];
  @Input() datos:any[]=[];
  @Input() tipo:ChartType ='doughnut';
  pieChartLegend = true;
  pieChartPlugins = [];

}

