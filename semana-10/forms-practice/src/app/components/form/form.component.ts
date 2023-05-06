import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STRING_VALIDATOR } from 'src/app/constants/constants';
import { NUMBER_VALIDATOR } from '../../constants/constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formulario!: FormGroup;
  private isString: string = STRING_VALIDATOR;
  private isNumber: string = NUMBER_VALIDATOR;

  formSubmit: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.iniciarFormulario();
  }

  private iniciarFormulario(): FormGroup {
    return this.fb.group({
      cardName: ['', [Validators.required, Validators.pattern(this.isString)]],
      cardNumber: ['', [Validators.required, Validators.pattern(this.isNumber)]],
      cardMonth: ['', [Validators.required, Validators.pattern(this.isNumber)]],
      cardYear: ['', [Validators.required, Validators.pattern(this.isNumber)]],
      cardCvc: ['', [Validators.required, Validators.pattern(this.isNumber)]]
    })
  }

  guardar() {
    if (this.formulario.valid) {
      this.formSubmit = true;

    } else {
      this.formSubmit = false;

    }
  }

  esCampoValido(campo: string) {
    const validarCampo = this.formulario.get(campo);
    return !validarCampo?.valid && validarCampo?.touched ? 'error' : validarCampo?.touched ? '' : '';
  }

}
