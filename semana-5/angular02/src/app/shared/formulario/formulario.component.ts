import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import {
  VALIDATION_EMAIL,
  VALIDATION_NAME,
  VALIDATION_NUMBER,
} from 'src/app/constants/constants';
import { UbicacionPaisService } from '@shared/services/ubicacion-pais.service';
import { map } from 'rxjs';
import { Ipais } from '@shared/interfaces/pais.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  // ! Declarando el formulario
  /* formularioGeneral= new FormGroup({}); */
  formularioGeneral!: FormGroup;
  private isEmail: string = VALIDATION_EMAIL;
  private isName: string = VALIDATION_NAME;
  private isMoney: string = VALIDATION_NUMBER;
  private isDate: string = '';
  public departamentos!: Ipais[];
  public municipios!: Ipais[];
  public cantones!: Ipais[];

  // ! private fb:FormBuilder,private toastr:
  constructor(private fb: FormBuilder, private toastr: ToastrService, private ubicacionPais: UbicacionPaisService) { }

  ngOnInit(): void {
    this.formularioGeneral = this.iniciarFormulario(); this.llenarComboDepartamentos();
  }

  iniciarFormulario(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(this.isName)]],
      apellido: ['', [Validators.required, Validators.pattern(this.isName)]],
      correo: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      genero: ['', [Validators.required]],
      fecha: ['', [Validators.required, Validators.pattern(this.isDate)]],
      mensaje: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      departamento: ['', [Validators.required]],
      municipio: ['', [Validators.required]],
      canton: ['', [Validators.required]],
      salario: ['', [Validators.required, Validators.min(300.00), Validators.pattern(this.isMoney)]],

      direccion: this.fb.group({
        ubicacion: ['', []],
        colonia: ['', [Validators.nullValidator]]
      }),

      gustos: this.fb.group({
        verde: ['', []],
        rojo: ['', []],
        negro: ['', []],
      }),
      estado: ['', []],
      pasatiempos: this.fb.array([]),


    });
  }

  guardar() {
    if (this.formularioGeneral.valid) {
      Swal.fire({
        position: 'center',
        title: 'Buen trabajo!',
        text: 'submit disparado, formulario es valido',
        icon: 'info',
      });
      console.log(this.formularioGeneral.value);
    } else {
      Swal.fire({
        position: 'center',
        title: 'Faltan datos en el formulario!',
        text: 'submit disparado, formulario No valido',
        icon: 'warning',
      });

      return Object.values(this.formularioGeneral.controls).forEach(
        (control) => control.markAsTouched()
      );
    }
  }

  esCampoValido(campo: string) {
    const validarCampo = this.formularioGeneral.get(campo);
    return !validarCampo?.valid && validarCampo?.touched
      ? 'is-invalid'
      : validarCampo?.touched
        ? 'is-valid'
        : '';
  }

  llenarComboDepartamentos() {
    this.ubicacionPais.getDepa().pipe(map((dp) => dp.filter((depa) => depa.codigo.length === 2))).subscribe((resp) => {
      this.departamentos = resp;
      console.log(this.departamentos)
    })
  }

  deptoChange(id: string): void {
    this.ubicacionPais.getDepa()
      .pipe(map((dp) => dp.filter((muni) => muni.codigo.startsWith(id) && muni.codigo.length === 4)))
      .subscribe((resp) => {
        this.municipios = resp;
        console.log(this.municipios)
      })
  }

  muniChange(id: string): void {
    this.ubicacionPais.getDepa()
      .pipe(map((dp) => dp.filter((cton) => cton.codigo.startsWith(id) && cton.codigo.length === 6)))
      .subscribe((resp) => {
        this.cantones = resp;
        console.log(this.cantones);
      })
  }

  noRequiereValor(campo: string): string {
    return this.formularioGeneral.get(campo)?.value ? 'is-valid' : '';
  }


  get pasatiempos() {
    return this.formularioGeneral.get('pasatiempos') as FormArray;
  }

  agregarPasatiempo() {
    this.pasatiempos.push(this.fb.control('', Validators.required));
  }

  borrarPasatiempo(i: number) {
    this.pasatiempos.removeAt(i);
  }

}
