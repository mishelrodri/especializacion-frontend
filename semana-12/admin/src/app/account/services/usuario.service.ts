import { Injectable, NgZone,inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ILoginUsuario, IRegistroUsuario } from '../interfaces/auth.interface';
import { environment } from 'src/environments/environment';
import { tap,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Usuario } from '../models/usuario.model';

const base_url=environment.baseUrl;

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  storage:Storage= window.localStorage;

  public usuario!: Usuario;

 private http=inject(HttpClient);

  constructor(private router:Router, private ngZone:NgZone
    ) { }

    crearUsuario(forData:IRegistroUsuario){
      return this.http.post(`${base_url}/usuarios`, forData).pipe(
        tap((resp:any)=>{
          this.guardarLocalStorage(resp.token, resp.menu);
        })
      )
    }

    guardarLocalStorage(token:string, menu:any){
      this.storage.setItem('token',token);
      this.storage.setItem('menu',JSON.stringify(menu));

    }

    get token():string{
      return this.storage.getItem("token") || "";
    }

    login(formData:ILoginUsuario){
      return this.http.post(`${base_url}/login`,formData).pipe(
        tap((resp:any)=>{
          this.guardarLocalStorage(resp.token,resp.menu);
          const user= resp;
          return user;
        }),
        catchError(err=>{
          return throwError('Error inesperado')
        })
      )
    }

    logout(){
      this.storage.removeItem("token");
      this.storage.removeItem("menu")
      this.ngZone.run(()=>{
        this.router.navigateByUrl('/account/login');
      })
    }


}
