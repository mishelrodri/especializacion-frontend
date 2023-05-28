import { Component, OnInit, Input } from '@angular/core';
import { Biblioteca } from '../../interfaces/Biblioteca.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  @Input() biblioteca!: Biblioteca;
  @Input() queryString!: string;
  p: any;


  constructor() { }

  ngOnInit(): void {
  }

}
