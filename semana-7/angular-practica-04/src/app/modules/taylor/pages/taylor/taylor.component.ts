import { Component, OnInit } from '@angular/core';
import { TaylorService } from '../../services/taylor.service';
import { TaylorI } from '../../Interfaces/TaylorInterface';

@Component({
  selector: 'app-taylor',
  templateUrl: './taylor.component.html',
  styleUrls: ['./taylor.component.scss'],
})
export class TaylorComponent implements OnInit {
  constructor(private taylorService: TaylorService) {}

  taylor: TaylorI = {
    album: '',
    quote: '',
    song: '',
  };
  ngOnInit() {
    this.taylorService.getQuoteTaylor().subscribe((resp: any) => {
      this.taylor = resp;
    });
  }
}
