import { Component, OnInit, Input } from '@angular/core';
import { Photos } from '../../interface/Photos';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() photo!: Photos;
  constructor() { }

  ngOnInit(): void {
  }

}
