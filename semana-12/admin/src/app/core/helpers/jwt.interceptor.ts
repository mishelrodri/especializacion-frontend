import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { AuthenticationService } from '../services/auth.service';
import { AuthfakeauthenticationService } from '../services/authfake.service';

import { environment } from '../../../environments/environment';
import { map } from 'rxjs/internal/operators';
import { catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/account/services/usuario.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService, private authfackservice: AuthfakeauthenticationService, private usuarioService: UsuarioService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.usuarioService.token;
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Autorization' + token
        }
      });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('interceptando', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          if (error.error.error === 'invalid_token') {
            this.usuarioService.validarToken().subscribe(() => {
              location.reload();
            });
          } else {
            this.router.navigateByUrl('/account/login')
          }
        }
        return throwError(() => new Error(error.error.error));
      }))

  }
}
