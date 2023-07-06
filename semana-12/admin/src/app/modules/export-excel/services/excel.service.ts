import { Injectable } from '@angular/core';
import { Workbook,ImagePosition } from 'exceljs';
import  * as fs   from 'file-saver';
import { LOGO } from '../constants/logo';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

private workBook!:Workbook;

dowloadExcel(){
  this.workBook=new Workbook();
  this.workBook.creator='cursoAngular';
  // this.workBook.addWorksheet('Consultas');
this.crearTablaConsulta();
  this.workBook.xlsx.writeBuffer().then((data)=>{
    const blob= new Blob([data]);
    fs(blob,'consulta.xlsx')
  })
}

crearTablaConsulta(){
const sheet = this.workBook.addWorksheet('CONSULTAS');

sheet.getColumn("B").width=5;
sheet.getColumn("C").width=15;
sheet.getColumn("D").width=12;
sheet.getColumn("E").width=15;
sheet.getColumn("F").width=40;
sheet.getColumn("G").width=40;
sheet.getColumn("H").width=8;

sheet.columns.forEach((column)=>{
  column.alignment={vertical:'middle', wrapText:true}
})

const logoId= this.workBook.addImage({
  base64:LOGO,
  extension:'png'
})

const position:ImagePosition={
tl:{col:1.4,row:1.2},
ext:{width:128, height:128}
}

sheet.addImage(logoId,position)
sheet.mergeCells('D5','G5')
const titulo= sheet.getCell('D5');
titulo.value='INFORMACION DE CONSULTAS MEDICAS'
titulo.style.font={
  bold:true,
  size:25,
  name:'Antique Olive',
  underline:'single',
  color:{
    argb:'660099'
  }

}

titulo.alignment={
  vertical:'middle',
  horizontal:'center',
  wrapText:false
}

const date= new Date();
const fechaFormato=`${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`
const celdaFecha= sheet.getCell('F6');
celdaFecha.value=fechaFormato;
celdaFecha.font={
  name:'Arial Nova',
  size:12,
  bold:true
}

celdaFecha.alignment={
  vertical:'middle',
  horizontal:'center',
  wrapText:false
}

const headerR= sheet.getRow(10);
headerR.values=[
  ' ',
  'N.',
  'Fecha',
  'Consultorio',
  'Especialidad',
  'Paciente',
  'Medico'
]

headerR.alignment={ vertical:'middle', wrapText:false};

['B','C','D','E','F','G','H'].forEach((columnKey)=>{
  sheet.getCell(`${columnKey}10`).font={
    bold:true,
    color:{argb:'FFFFFF'},
    size:12,
    italic:true
  };
  sheet.getCell(`${columnKey}10`).fill={
   type:'pattern',
   pattern:'solid',
   fgColor:{argb:'000000'},
   bgColor:{argb:''}
  };



});


}


}