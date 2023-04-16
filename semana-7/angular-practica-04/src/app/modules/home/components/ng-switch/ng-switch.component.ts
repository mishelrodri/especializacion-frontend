import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss'],
})
export class NgSwitchComponent implements OnInit {
  pais = 'Francia';
  constructor() {}
  goku = 1;
  powerUp() {
    if (this.goku === 5) return;
    this.goku++;
  }

  lowerPower() {
    if (this.goku === 0) return;

    this.goku--;
  }
  ngOnInit(): void {}
}
