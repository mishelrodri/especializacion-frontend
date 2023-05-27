import { Component, Input, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica-a',
  templateUrl: './grafica-a.component.html',
  styleUrls: ['./grafica-a.component.scss']
})
export class GraficaAComponent implements OnInit {
@Input() title:string='Sin titulo';
@Input('labels') donutLabel:Label[]=['label1', 'label2'];
@Input('data') donutData:MultiDataSet=[[350,4209]];
@Input() tipo:string='doughnut';
@Input('colors') colors:Color[]=[{backgroundColor:['#6857E6','#F02059','#2f2f2f']}];
  constructor() { }

  ngOnInit(): void {
  }

}
