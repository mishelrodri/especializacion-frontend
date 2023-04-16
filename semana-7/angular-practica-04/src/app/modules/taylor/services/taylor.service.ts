import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaylorService {
  constructor(private http: HttpClient) {}

  getQuoteTaylor() {
    return this.http.get('https://taylorswiftapi.onrender.com/get');
  }
}
