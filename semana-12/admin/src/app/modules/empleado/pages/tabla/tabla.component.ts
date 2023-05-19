import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IEmpleado } from '../../interface/IEmpleado';
import { EmpleadoService } from '../../service/empleado.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input() empleados!: IEmpleado;
  @Input() queryString!: string;
  p: any;



  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
  }

  eliminar(empleado: IEmpleado) {
    this.empleadoService.deleteEmpleado(empleado).subscribe((resp: any) => {
      console.log('elimino')
      this.empleadoService.getEmpleados();
    })
  }



}
