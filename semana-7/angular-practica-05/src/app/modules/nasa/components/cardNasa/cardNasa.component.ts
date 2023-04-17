import { Component, OnInit, Input } from '@angular/core';
import { NasaI } from '../../interfaces/NasaInterface';

@Component({
  selector: 'app-cardNasa',
  templateUrl: './cardNasa.component.html',
  styleUrls: ['./cardNasa.component.scss'],
})
export class CardNasaComponent implements OnInit {
  @Input() obj!: NasaI;

  constructor() {}

  ngOnInit() {}
}
