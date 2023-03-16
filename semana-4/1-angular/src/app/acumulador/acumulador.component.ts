import { Component } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  template: `
    <h2>Contador</h2>
    <hr />
    <button (click)="modificarValor(valor)" class="">⬆</button>
    <button (click)="modificarValor(-valor)" class="">⬇</button>
    <span>{{ numero }}</span>
  `,
})
export class AcumuladorComponent {
  numero: number = 100;
  valor: number = 10;
  modificarValor(valor: number): void {
    this.numero += valor;
  }
}
