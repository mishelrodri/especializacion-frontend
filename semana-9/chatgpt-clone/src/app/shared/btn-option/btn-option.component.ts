import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-option',
  templateUrl: './btn-option.component.html',
  styleUrls: ['./btn-option.component.scss']
})
export class BtnOptionComponent implements OnInit {

  @Input() texto!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
