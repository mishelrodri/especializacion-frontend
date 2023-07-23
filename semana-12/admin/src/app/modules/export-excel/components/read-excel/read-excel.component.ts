import { Component, OnInit } from '@angular/core';
import { IDatos } from '../../interfaces/IReadExcel.interface';
import * as xls from 'xlsx';
import { ConsultaService } from '../../services/consulta.service';
import { log } from 'console';
@Component({
  selector: 'app-read-excel',
  templateUrl: './read-excel.component.html',
  styleUrls: ['./read-excel.component.scss']
})
export class ReadExcelComponent implements OnInit {

  datos!:IDatos[];
  queryString!: string;
  p: any;
  constructor(private consultaService:ConsultaService) {
  }
leerFile(event:Event){
  const target= event.target as HTMLInputElement;
  const file= (target.files as FileList)[0];

  let fileReader= new FileReader();
  fileReader.readAsArrayBuffer(file);
  fileReader.onload=()=>{
    let data= fileReader.result;
    let Workbook= xls.read(data,{type:'array'})

    const nameSheet= Workbook.SheetNames[0];
    const hoja= Workbook.Sheets[nameSheet];
    this.datos= xls.utils.sheet_to_json(hoja,{raw:true});
    console.log(this.datos);

  }

}

  ngOnInit(): void {
    this.consultaService.getMedicos();
  }

  insertarRegistros(){
    this.datos.forEach((medico)=>{
      this.consultaService.setMedico(medico);
    })


  }

  get listMedicos(){
    return this.consultaService.medicoslist;
  }



}
