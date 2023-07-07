import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConsulta } from '../../clinica/interfaces/consulta.interface';
import { IConsultaExcelTabla, ITablaConsulta } from '../interfaces/excel.interface';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  exportExcel(): Observable<Blob> {
    const endpoint = `${this.url}/paciente/excel`;
    return this.http.get(endpoint, {
      responseType: 'blob'
    })

  }

  getConsultaExportporExcel() {
    return this.http.get<IConsulta[]>(this.url + '/consulta')
      .pipe(map((resp: IConsulta[]) => {
        resp.length = 5;
        const dataExcel: IConsultaExcelTabla = {
          tablaConsulta: this.getConsultaTabla(resp)
        }
        return dataExcel;
      }))
  }

  private getConsultaTabla(response: IConsulta[]): ITablaConsulta[] {
    return response.map((item: IConsulta) => ({
      fechaConsulta: `${item.fechaConsulta}`,
      numConsultorio: `${item.numConsultorio}`,
      especialidad: `${item.especialidad.nombreEspeciadad}`,
      paciente: `${item.paciente.nombrePaciente} ${item.paciente.apellidoPaciente}`,
      medico: `${item.medico.nombreMedico} ${item.medico.apellidoMedico}`
    }))
  }

}
