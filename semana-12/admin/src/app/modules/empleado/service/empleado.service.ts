import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmpleado } from '../interface/IEmpleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) {
    console.log('funka')
  }

  // getEmpleados() {
  //   return this.http.get("http://localhost:8080/empleado/listar").subscribe((resp: any) => {
  //     this.listEmpleados = resp;
  //     console.log(resp)
  //   });
  // }


  getEmpleados() {
    return this.http.get("http://localhost:8080/empleado/listar");
  }

  saveEmpleado(empleado: IEmpleado): any {
    return this.http.post("http://localhost:8080/empleado/agregar", empleado);

  }

}
