import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectConfig } from '@ng-select/ng-select';
import { PedidoService } from '@pedido/services/pedido.service';
import Swal from 'sweetalert2';
//
import { Img, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { Pedido } from '@pedido/interfaces/IPedido.interface';
//
import { Workbook, ImagePosition } from 'exceljs';
import * as fs from 'file-saver';
//
import { ChartOptions } from 'chart.js';

PdfMakeWrapper.setFonts(pdfFonts);
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  isEditar: boolean = false;
  formularioPedido!: FormGroup;
  currentPage: number = 1;
  private workbook!: Workbook;

  constructor(private modalService: NgbModal, private config: NgSelectConfig, private fb: FormBuilder, private pedidoService: PedidoService) {
    this.config.notFoundText = 'No se encontraron coincidencias';
  }
  ngOnInit(): void {
    this.pedidoService.getPedidos();
    this.pedidoService.getClientes();
    this.pedidoService.getAllPedidos();
    this.formularioPedido = this.iniciarFormulario();
  }
  iniciarFormulario() {
    return this.fb.group({
      idPedido: [''],
      fechaPedido: ['', [Validators.required]],
      estado: [null],
      cliente: [null, [Validators.required]],
    })
  }


  get isLoading() {
    return this.pedidoService.isLoading;
  }

  get listPedidos() {
    return this.pedidoService.pedidosResponse;
  }

  get listClientes() {
    return this.pedidoService.listClientes;
  }

  get allPedidos() {
    return this.pedidoService.listPedidos;

  }

  openModal(content: any, pedido: any = '') {

    if (pedido?.id) {
      this.isEditar = true;
      this.formularioPedido.setValue({
        idPedido: pedido.id,
        fechaPedido: pedido.fechaPedido,
        estado: pedido.estado ? 'entregado' : 'devolucion',
        cliente: pedido.cliente.id
      })
    } else {
      this.formularioPedido.reset();
      this.isEditar = false;
    }

    this.modalService.open(content, { centered: true, size: 'md' });
  }

  close() {
    this.modalService.dismissAll();
  }

  pageChange(page: number) {
    this.pedidoService.getPedidosbyPage(page - 1);
  }

  guardar() {

    if (this.formularioPedido.valid) {
      const idPedido = this.formularioPedido.get('idPedido')?.value;

      if (idPedido) {
        const estado = this.formularioPedido.get('estado')?.value == 'entregado';
        this.formularioPedido.get('estado')?.patchValue(estado ? true : false)
        this.pedidoService.editarPedido(idPedido, this.formularioPedido.value).subscribe(() => {
          this.pedidoService.getPedidos();
          this.currentPage = 1;

          Swal.fire({
            icon: 'success',
            title: 'Pedido Editado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
          this.modalService.dismissAll();
        })
      } else {

        this.formularioPedido.get('estado')?.patchValue(true);
        this.pedidoService.crearPedido(this.formularioPedido.value).subscribe(() => {
          this.pedidoService.getPedidos();
          this.currentPage = 1;

          Swal.fire({
            icon: 'success',
            title: 'Pedido guardado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
          this.modalService.dismissAll();
        })
      }


    }
    return Object.values(this.formularioPedido.controls).forEach((control) => control.markAsTouched())
  }

  esCampoValido(campo: string) {
    const validarCampo = this.formularioPedido.get(campo);
    return !validarCampo?.valid && validarCampo?.touched ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';
  }

  eliminar(idPedido: number) {
    Swal.fire({
      title: 'Estas seguro de eliminar este pedido?',
      text: "No puedes revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.pedidoService.eliminarPedido(idPedido).subscribe(() => {
          this.pedidoService.getPedidos();
          this.currentPage = 1;
          Swal.fire(
            'Borrado!',
            'Registro eliminado con exito.',
            'success'
          )
        })


      }
    })
  }

  async generatePDF() {
    const pdf = new PdfMakeWrapper();
    pdf.header(new Txt(`PARCIAL II`).alignment('right').italics().margin(10).end);
    pdf.add(new Txt(`REPORTE DE CONSULTAS`).color('blue').fontSize(18).bold().alignment('center').end);
    pdf.add(new Txt('').margin(15).end);
    // pdf.add(await new Img('assets/images/users/avatar-1.jpg').height(50).width(50).absolutePosition(60,40).build());
    pdf.add(new Txt('').margin(15).end);
    pdf.add(new Txt('CONSULTAS:').margin(15).bold().decoration('underline').end);
    pdf.add(new Txt('').margin(15).end);
    pdf.add(new Table(
      [['', 'Paciente', 'Medico', 'Especialidad', 'Fecha']]).alignment('center').widths([20, 200, 200, 130, 100]).fontSize(12).italics().bold().layout('lightHorizontalLines').end);
    for (let x of this.allPedidos) {
      pdf.add(new Table([
        ['', '', ''], [`${x.fechaPedido}`, `${x.cliente.nombre}`, `${x.estado}`]
      ]).widths([20, 200, 200, 130, 100]).fontSize(10).layout('lightHorizontalLines').end);
    }
    pdf.add(new Txt('').margin(20).end);
    pdf.add(new Txt('F._______________').alignment('right').end);
    pdf.footer(new Txt('' + new Date()).alignment('left').italics().margin(10).end);
    pdf.pageOrientation("landscape");
    pdf.create().open();
  }

  async downloadExcel() {
    Swal.fire({
      text: 'Espere un momento estamos generando el archivo',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    this.workbook = new Workbook();
    this.workbook.creator = 'cursoAngular';
    // this.workbook.addWorksheet('CONSULTAS');

    await this.crearTablaConsulta(this.allPedidos);
    setTimeout(() => {
      this.workbook.xlsx.writeBuffer().then((data) => {
        Swal.close();

        const blob = new Blob([data]);
        fs(blob, 'consulta.xlsx');
      })
    }, 3000);

  }

  async crearTablaConsulta(dataConsulTaTable: Pedido[]) {
    const sheet = this.workbook.addWorksheet('CONSULTAS');
    sheet.getColumn("B").width = 5;
    sheet.getColumn("C").width = 15;
    sheet.getColumn("D").width = 12;
    sheet.getColumn("E").width = 15;
    sheet.getColumn("F").width = 40;
    sheet.getColumn("H").width = 40;
    sheet.getColumn("H").width = 40;

    sheet.columns.forEach((column) => {
      column.alignment = { vertical: 'middle', wrapText: true }
    });

    // const logoId = this.workbook.addImage({
    //   base64:LOGO,
    //   extension: 'png',
    // })

    const position: ImagePosition = {
      tl: { col: 1.4, row: 1.2 },
      ext: { width: 128, height: 128 },
    };

    // sheet.addImage(logoId,position);
    sheet.mergeCells('E5', 'H5');
    const titulo = sheet.getCell('E5');
    titulo.value = 'INFORMACION DE CONSULTAS MEDICAS';

    titulo.style.font = {
      bold: true,
      size: 25,
      name: 'Antique Olive',
      underline: 'single',
      color: {
        argb: '660099'
      }
    };

    titulo.alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: false
    }

    const date = new Date();
    const fechaFormato = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`
    const celdaFecha = sheet.getCell('F6');
    celdaFecha.value = fechaFormato;
    celdaFecha.font = {
      name: 'Arial Nova',
      size: 12,
      bold: true
    }
    celdaFecha.alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: false
    };

    const headerR = sheet.getRow(10);
    headerR.values = [
      '',
      'N.',
      'Fecha',
      'Consultorio',
      'Especialidad',
      'Paciente',
      'Medico'
    ]

    headerR.alignment = { vertical: 'middle', wrapText: false };

    ['B', 'C', 'D', 'E', 'F', 'G', 'H'].forEach((columnKey) => {
      sheet.getCell(`${columnKey}10`).font = {
        bold: true,
        color: { argb: 'FFFFFF' },
        size: 12,
        italic: true,
      };

      sheet.getCell(`${columnKey}10`).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '000000' },
        bgColor: { argb: '' },
      }
    });

    const filasInsertar = sheet.getRows(11, dataConsulTaTable.length)!;
    for (let index = 0; index < filasInsertar.length; index++) {
      const itemData = dataConsulTaTable[index];
      const row = filasInsertar[index];
      row.values = [
        '',
        `${index + 1}`,
        `${itemData.cliente.nombre}`,
        `${itemData.cliente.nombre}`,
        `${itemData.cliente.nombre}`,
        `${itemData.cliente.nombre}`,
        `${itemData.cliente.nombre}`
      ];

      let fila = 11 + index;

      ['B', 'C', 'D', 'E', 'F', 'G', 'H'].forEach((columnKey) => {
        sheet.getCell(`${columnKey}${fila}`).border = {
          top: { style: 'double', color: { argb: '00000000' } },
          left: { style: 'double', color: { argb: '00000000' } },
          bottom: { style: 'double', color: { argb: '00000000' } },
          right: { style: 'double', color: { argb: '00000000' } },
        }
      })


      // const idImage = await this.getIdImage('../assets/images/profile-img.png');
      // sheet.addImage(idImage,{
      //   tl: {col:7,row: row.number - 1},
      //   ext: {width:50,height:50},
      // });

      row.height = 55;
    }


  }



  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartDatasets = [{
    data: [300, 500, 100]
  }];
  public pieChartLegend = true;
  public pieChartPlugins = [];


}
