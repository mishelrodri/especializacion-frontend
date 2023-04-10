import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  openMenu() {
    this.activateMenu();
  }

  selectItem() {
    this.activateMenu();
  }

  activateMenu() {
    const hamburguer = document.querySelectorAll('.line');
    hamburguer[0].classList.toggle('line__1');
    hamburguer[1].classList.toggle('line__2');
    hamburguer[2].classList.toggle('line__3');
    document.querySelector('#menu')?.classList.toggle('hidden');
  }
}
