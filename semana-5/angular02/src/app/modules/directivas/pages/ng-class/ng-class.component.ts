import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss'],
})
export class NgClassComponent {
  tema: string = ' Uso de ngClass';
  //Usando variable en el ngClass
  alerta: string = 'alert-danger';

  //  Utilizando ngClass como objetos
  propiedad = { danger: false };

  //Usando ngClass condicional
  message: number = 5;
}
