import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ConsultaService } from '../../services/consulta.service';
import { ExcelService } from '../../services/excel.service';
import { IConsultaExcelTabla } from '../../interfaces/excel.interface';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss']
})
export class Base64Component implements OnInit {

  myImage: string = '';
  codigoBase64: string = '';



  constructor(private consultaService: ConsultaService, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.consultaService.getCancionesTaylor();
  }

  preVisualizarImagen($event: any) {
    const target = $event.target as HTMLInputElement;

    const file: File = (target.files as FileList)[0];

    const observable = new Observable((subcribir: Subscriber<any>) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        subcribir.next(fileReader.result);
        subcribir.complete();
      }

      fileReader.onerror = (error) => {
        subcribir.error(error);
        subcribir.complete();
      }
    });

    observable.subscribe((resp) => {
      this.myImage = resp;
      this.codigoBase64 = resp;
    })

  }

  subirImagen() {

  }

  exportExcelEndpoint() {
    this.consultaService.exportExcel().subscribe((data: any) => {
      let file = new Blob([data],
        {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
      let fileUrl = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.download = 'paciente.xls';
      link.href = fileUrl;
      link.click();
    })
  }

  download(): void {
    this.consultaService.getConsultaExportporExcel().subscribe((response: IConsultaExcelTabla) => {
      this.excelService.dowloadExcel(response, this.consultaService.cancionesTaylor);
    })
  }

}
