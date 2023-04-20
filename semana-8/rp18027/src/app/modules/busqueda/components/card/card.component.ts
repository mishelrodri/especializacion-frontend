import { Component, OnInit,Input } from '@angular/core';
import { PhotoI } from '../../Interfaces/PhotosInterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() obj!:PhotoI;

  constructor() { }

  ngOnInit(): void {
  }

}
