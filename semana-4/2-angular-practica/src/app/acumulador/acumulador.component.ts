import { Component } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  template: `
    <h1>{{ title }}</h1>
    <hr />
    <button (click)="modificarValor(valor)">Incrementar</button>
    <button (click)="modificarValor(-valor)">Decrementar</button>
    <span>{{ numero }}</span>
  `,
})
export class AcumuladorComponent {
  title: string = '🖐 Hola Angular! desde Class';
  numero: number = 100;
  valor: number = 10;
  modificarValor(incremento: number) {
    this.numero += incremento;
  }
}
