import { Component, OnInit } from '@angular/core';
import { TaylorService } from '../../service/taylor.service';
import { ITaylor } from '../../interfaces/ITaylor';

@Component({
  selector: 'app-taylor',
  templateUrl: './taylor.component.html',
  styleUrls: ['./taylor.component.scss'],
})
export class TaylorComponent implements OnInit {
  taylorSongs: ITaylor[] = [];

  constructor(private taylorService: TaylorService) {
    // console.log(taylorService.getAllSongs());
  }

  ngOnInit(): void {
    this.taylorService.getAllSongs().subscribe((resp: any) => {
      const {
        record: { cancionesTaylorSwift },
      } = resp;
      this.taylorSongs = cancionesTaylorSwift;
    });
  }
}
