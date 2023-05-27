import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from './chartType.interface';


@Component({
  selector: 'app-grafica-b',
  templateUrl: './grafica-b.component.html',
  styleUrls: ['./grafica-b.component.scss']
})
export class GraficaBComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  @Input('data') ChartOptions: Partial<ChartOptions> = {
    series: [
      {
        name: "My-series",
        data: [10, 41, 35]
      }
    ],
    chart: {
      height: 350,
      type: "bar"
    },
    title: {
      text: "My First Angular"
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    }
  };


  constructor() { }

  ngOnInit(): void {
  }

}
