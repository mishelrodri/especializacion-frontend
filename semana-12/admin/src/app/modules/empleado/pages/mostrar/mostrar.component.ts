import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../service/empleado.service';
import { IEmpleado } from '../../interface/IEmpleado';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  offset = 0;


  listEmpleados: IEmpleado[] = [];
  term: string = '';
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Empleado' }, { label: 'Mostrar', active: true }];
    this.empleados();

  }

  empleados() {
    this.empleadoService.getEmpleados().subscribe((resp: any) => {
      this.listEmpleados = resp;
      console.log(resp)
    })

    // return this.listEmpleados;
  }

  // get listEmpleados() {
  //   return this.empleadoService.listEmpleados;
  // }


}
