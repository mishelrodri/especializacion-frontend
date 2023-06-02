import { Component, OnInit, ViewChild } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { Libro } from '../../interface/libro.interface';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  @ViewChild(ModalComponent) addView!: ModalComponent;
  p: number = 0;

  constructor(private servicioLibro: LibroService) { }

  ngOnInit(): void {
    this.servicioLibro.getBooks(this.p);
  }

  get libros() {
    return this.servicioLibro.listLibros;
  }

  eliminarLibro(libro: Libro) {
    this.servicioLibro.deleteLibro(libro).subscribe((resp) => {
      console.log('HAZ ELIMINADOO :D - abajo se actualiza')
      this.servicioLibro.getBooks(this.p);
      this.pageChangeEvent(1);
    })
  }


  editarLibro(libro: Libro) {
    this.addView.LoadEditData(libro);
    this.pageChangeEvent(1);

  }
  pageChangeEvent(event: number) {
    this.p = event;
    this.servicioLibro.getBooks(this.p);

  }

  get total() {
    return this.servicioLibro.total;
  }

}
