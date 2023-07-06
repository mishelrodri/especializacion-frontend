import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
url:string='http://localhost:8080';

  constructor(private http:HttpClient) { }

  exportExcel():Observable<Blob>{
    const endpoint= `${this.url}/paciente/excel`;
    return this.http.get(endpoint,{
      responseType:'blob'
    })

  }

}
