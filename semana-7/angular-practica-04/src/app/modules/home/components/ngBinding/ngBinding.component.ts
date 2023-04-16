import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngBinding',
  templateUrl: './ngBinding.component.html',
  styleUrls: ['./ngBinding.component.scss'],
})
export class NgBindingComponent implements OnInit {
  list: string[] = ['Hola', 'Mundo'];
  song: string = '';
  agregar(): void {
    if (this.song.trim().length === 0) {
      this.song = '';
      return;
    }
    this.list.push(this.song);
    this.song = '';

    console.log(this.list);
  }

  constructor() {}

  ngOnInit() {}
}
