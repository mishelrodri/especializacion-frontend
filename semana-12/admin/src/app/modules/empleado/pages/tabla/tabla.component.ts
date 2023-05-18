import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IEmpleado } from '../../interface/IEmpleado';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input() empleados!: IEmpleado;
  @Input() queryString!: string;
  p: any;



  constructor() { }

  ngOnInit(): void {
  }





}
