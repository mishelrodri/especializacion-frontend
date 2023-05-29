import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post.interface';
import { SwiitchService } from 'src/app/services/swiitch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  post!: Post;

  constructor(private modalService: SwiitchService) { }

  ngOnInit(): void {
    this.obtener();
  }

  closeModal() {
    this.modalService.$modal.emit(false);
  }

  obtener() {
    this.post = this.modalService.$post;
  }


}
