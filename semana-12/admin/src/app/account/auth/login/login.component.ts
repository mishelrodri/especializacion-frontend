import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { IS_CLAVE, IS_EMAIL } from '../../constans/const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {

  click: boolean = false;
  storage: Storage = window.localStorage;
  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
    private authFackservice: AuthfakeauthenticationService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.loginForm = this.iniciarFormulario();
  }

  iniciarFormulario() {
    return this.formBuilder.group({
      email: [localStorage.getItem('email') || '', [Validators.required, Validators.pattern(IS_EMAIL)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(IS_CLAVE)]],
      remember: [false]
    })
  }



  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }




  cambiarType() {
    this.click = !this.click;

  }


  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.usuarioService.login(this.loginForm.value).subscribe(
      (resp) => {
        if (this.loginForm.get('remember')?.value) {
          this.storage.setItem('email', this.loginForm.get('email')?.value)
        } else {
          this.storage.removeItem('email');
        }

        this.router.navigate(['/dashboard'])
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err
        })
      }
    )

  }

}
