import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuMobile(): void {
    const lineas = document.querySelectorAll('.line');

    lineas[0].classList.toggle('open');
    lineas[1].classList.toggle('open');
    lineas[2].classList.toggle('open');

    const menu = document.querySelector('.menu_mobile_container');

    menu?.classList.toggle('hidden');
  }
}
