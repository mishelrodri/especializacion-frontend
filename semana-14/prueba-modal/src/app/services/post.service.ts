import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  listaPost: Post[] = [];

  constructor(private http: HttpClient) { }

  getPosts() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((resp: any) => {
      this.listaPost = resp;
    })
  }

}
