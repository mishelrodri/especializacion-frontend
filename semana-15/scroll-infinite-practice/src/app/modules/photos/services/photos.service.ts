import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photos } from '../interface/Photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  url = "https://jsonplaceholder.typicode.com/photos";

  photos: Photos[] = [];

  constructor(private http: HttpClient) {
    console.log('el servicio funciona')
  }

  getPhotos(page = 0) {
    console.log('enytre')
    return this.http.get(`${this.url}?_limit=8&_page=${page}`);
  }

}
