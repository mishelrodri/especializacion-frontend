import { Component, OnInit } from '@angular/core';
import { IMAGE } from 'src/app/constants/constans';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  reputation: string = IMAGE;
  constructor() {}

  ngOnInit(): void {}
}
