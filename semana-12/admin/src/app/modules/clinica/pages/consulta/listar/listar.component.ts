import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../../services/consulta.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private clinicaService: ConsultaService) { }

  ngOnInit(): void {
    this.clinicaService.getConsultas();
  }

  get listConsultas() {
    return this.clinicaService.listConsultas;
  }

  descargarPdf() {
    this.clinicaService.generarConsultaPdf().subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'consultaMedicaPorEspecialidad.pdf'
      link.click();
    })
  }
  generarConsultaPdf() {
    this.clinicaService.generarConsultaPdf().subscribe((resp: Blob) => {
      const file = new Blob([resp], { type: 'application/pdf' })
      const fileUrl = URL.createObjectURL(file);
      window.open(fileUrl);
    })
  }

  crearPdf() {
    const data = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const content = 'PACIENTES Y MEDICOS CONSULTADOS'

    const options = { background: 'white', scale: 3 }
    html2canvas(data, options).then((resp) => {
      const img = resp.toDataURL('image/PNG');
      const bufferX = 60;
      const bufferY = 60;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, '', 'FAST')
      return doc;
    }).then((docResult) => {
      docResult.text(content, 10, 10);
      docResult.save(`${new Date().toString()}_consultasG.pdf`)
    })

  }
  pdfMake() {

  }

}
