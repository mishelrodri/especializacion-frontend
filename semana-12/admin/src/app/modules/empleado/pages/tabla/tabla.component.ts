import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IEmpleado } from '../../interface/IEmpleado';
import { EmpleadoService } from '../../service/empleado.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Estas segurop de eliminar el registro?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.empleadoService.deleteEmpleado(empleado).subscribe((resp: any) => {
          console.log('elimino')
          Swal.fire('Cambios Realizados!', '', 'success')
          this.empleadoService.getEmpleados();
        })

      } else if (result.isDenied) {
        Swal.fire('Acción Cancelada', '', 'info')
      }
    })


  }



}
