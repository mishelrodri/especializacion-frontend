import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { SwiitchService } from './services/swiitch.service';
import { Post } from './interface/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  modalSwitch: boolean = false;
  post!: Post;

  constructor(private postService: PostService, private modalService: SwiitchService) { }

  ngOnInit(): void {
    this.modalService.$modal.subscribe((valor) => (this.modalSwitch = valor))
    this.postService.getPosts();
  }

  get listaPosts() {
    return this.postService.listaPost;
  }

  openModal() {
    this.modalSwitch = true;
  }

  openModal2(post: Post) {
    this.modalService.$post = post;
    this.modalSwitch = true;
  }

}
