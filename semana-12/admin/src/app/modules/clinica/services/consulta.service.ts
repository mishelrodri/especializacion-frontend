import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IConsulta } from '../interfaces/consulta.interface';
import { Img, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
PdfMakeWrapper.setFonts(pdfFonts);

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  listConsultas: IConsulta[] = [];
  url: string = 'http://localhost:8080';
  getConsultas() {
    return this.http.get<IConsulta[]>('http://localhost:8080/consulta').subscribe((resp) => {
      this.listConsultas = resp;
    })
  }

  generarConsultaPdf() {
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
    }
    return this.http.get<Blob>(`${this.url}/consulta/pdf2`, httpOptions)
  }
  visualizarPdf(pdf: string) {
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
    }
    return this.http.get<Blob>(`${this.url}/consulta/${pdf}`, httpOptions)
  }

  async generarPdfMake(titulo: string, data: IConsulta[]) {
    const pdf = new PdfMakeWrapper();
    pdf.header(new Txt(`${titulo}`).alignment('right').italics().margin(10).end);
    pdf.add(new Txt(`REPORTE DE CONSULTAS`).color('blue').fontSize(18).bold().alignment('center').end);
    pdf.add(new Txt('').margin(15).end);
    pdf.add(await new Img('assets/images/users/avatar-1.jpg').height(50).width(50).absolutePosition(60, 40).build());
    pdf.add(new Txt('').margin(15).end);
    pdf.add(new Txt('CONSULTAS:').margin(15).bold().decoration('underline').end);
    pdf.add(new Txt('').margin(15).end);
    pdf.add(new Table(
      [['', 'Paciente', 'Medico', 'Especialidad', 'Fecha']]).alignment('center').widths([20, 200, 200, 150, 100]).fontSize(12).italics().bold().layout('lightHorizontalLines').end);
    for (let x of data) {
      pdf.add(new Table([
        ['', '', '', '', ''], ['', `${x.paciente.nombrePaciente}${x.paciente.apellidoPaciente}`, `${x.medico.nombreMedico}${x.medico.apellidoMedico}`, `${x.especialidad.nombreEspeciadad}`, `${x.fechaConsulta}`]
      ]).widths([20, 200, 200, 150, 100]).fontSize(10).layout('lightHorizontalLines').end);
    }
    pdf.add(new Txt('').margin(20).end);
    pdf.add(new Txt('F._______________').alignment('right').end);
    pdf.footer(new Txt('' + new Date()).alignment('left').italics().margin(10).end);
    pdf.pageOrientation("landscape");
    pdf.create().open();
  }

  async generarPdfMake2(titulo: string, data: IConsulta[]) {
    const pdf = new PdfMakeWrapper();
    pdf.header(new Txt(`${titulo}`).alignment('right').italics().margin(10).end);
    pdf.add(new Txt(`REPORTE DE MEDICOS`).color('red').fontSize(18).bold().alignment('center').end);
    pdf.add(new Txt('').margin(15).end);
    pdf.add(await new Img('assets/images/users/avatar-2.jpg').height(50).width(50).absolutePosition(60, 40).build());
    pdf.add(new Txt('').margin(15).end);
    pdf.add(new Txt('CONSULTAS:').margin(15).bold().decoration('lineThrough').end);
    pdf.add(new Txt('').margin(15).end);
    pdf.add(new Table(
      [[ 'Medico', 'Especialidad']]).alignment('center').widths([250,250]).fontSize(12).italics().color("green").bold().layout('lightHorizontalLines').end);
    for (let x of data) {
      pdf.add(new Table([
        ['', ''], [`${x.medico.nombreMedico}${x.medico.apellidoMedico}`, `${x.especialidad.nombreEspeciadad}`]
      ]).alignment("center").widths([250, 250]).fontSize(10).layout('lightHorizontalLines').end);
    }
    pdf.add(new Txt('').margin(20).end);
    pdf.add(new Txt('F._______________').alignment('right').end);
    pdf.footer(new Txt('' + new Date()).alignment('left').italics().margin(10).end);
    pdf.pageOrientation("portrait");
    pdf.create().open();
  }

}
