import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent {
  title = '🙌 Hola Angular again';
  numero: number = 100;
  valor: number = 10;

  Incrementar(incremneto: number) {
    this.numero += incremneto;
  }
}
