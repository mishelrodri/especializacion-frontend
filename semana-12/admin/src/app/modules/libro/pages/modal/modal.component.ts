import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LibroService } from '../../services/libro.service';
import { Biblioteca, Libro } from '../../interface/libro.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('content') addView!: ElementRef;
  formularioGeneral!: FormGroup;
  libro!: Libro;
  constructor(private fb: FormBuilder, private modalService: NgbModal, private libroService: LibroService) { }
  p: number = 0;
  ngOnInit(): void {
    this.formularioGeneral = this.iniciarFormulario();
    this.libroService.getBibliotecas();
  }

  private iniciarFormulario() {
    return this.fb.group({
      id_libro: [''],
      nombre_libro: ['', [Validators.required]],
      biblioteca_id: ['', [Validators.required]]
    })
  }

  //! Para abrir el modal

  openModal() {
    this.Clearform();
    this.modalService.open(this.addView, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    }, (reason) => { });
  }

  Clearform() {
    this.formularioGeneral.setValue({ id_libro: 0, nombre_libro: '', biblioteca_id: '' })
  }

  esCampoValido(campo: string) {

  }

  saveBook() {
    if (this.formularioGeneral.valid) {
      const datosRecibidos = this.formularioGeneral.value;
      const biblioteca: Biblioteca = { id: datosRecibidos.biblioteca_id }
      this.libro = {
        id: datosRecibidos.id_libro,
        nombre: datosRecibidos.nombre_libro,
        biblioteca: biblioteca
      }

      if (this.libro.id === 0) {
        this.libroService.saveLibro(this.libro).subscribe((resp) => {
          this.formularioGeneral.reset();
          console.log('INSERTASTES')
          this.modalService.dismissAll();
          Swal.fire('BIEN', '', 'success')
        });
      } else {
        this.libroService.editLibro(this.libro).subscribe((resp) => {
          this.formularioGeneral.reset();
          console.log('EDITASTE')
          this.modalService.dismissAll();
          Swal.fire('BIEN', '', 'success')
          this.libroService.getBooks(this.p);

        });
      }

    } else {
      return Object.values(this.formularioGeneral.controls).forEach((control) => control.markAsTouched());
    }
  }

  LoadEditData(libro: Libro) {
    this.openModal();
    this.formularioGeneral.setValue({ id_libro: libro.id, nombre_libro: libro.nombre, biblioteca_id: libro.biblioteca.id });
  }


  get bibliotecas() {
    return this.libroService.listaBiblioteca;
  }


}
