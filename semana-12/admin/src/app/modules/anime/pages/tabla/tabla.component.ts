import { Component, OnInit, Input } from '@angular/core';
import { IAnime } from '../../interface/anime';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  @Input() cards!: IAnime[];
  //TODO: cadena de la busqueda
  @Input() queryString!: string;
  // ! Card Seleccionada
  card: IAnime;
  p: any;


  constructor(private modalService: NgbModal) { }


  ngOnInit(): void {
  }


  /**
 * Open modal
 * @param content modal content
 */
  openModal(content: any, card: IAnime) {
    this.card = card;
    this.modalService.open(content, { centered: true });
  }


}
