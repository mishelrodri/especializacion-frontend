import { EventEmitter, Injectable } from '@angular/core';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class SwiitchService {

  $modal = new EventEmitter<any>();
  $post!: Post;

  constructor() { }
}
