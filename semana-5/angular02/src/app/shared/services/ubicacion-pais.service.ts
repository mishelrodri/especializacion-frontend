import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipais } from '@shared/interfaces/pais.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionPaisService {

  constructor(private http: HttpClient) { }

  public getDepa(): Observable<Ipais[]> {
    return this.http.get<Ipais[]>("assets/ubicacionPais.json");
  }

}
