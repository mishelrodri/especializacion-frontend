import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetpetsService } from '@modules/mascotas/services/getpets.service';
import { VALIDATION_NAME, VALIDATION_NUMBER } from 'src/app/constants/constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  formMascota!: FormGroup;
  private isLetras: string = VALIDATION_NAME;
  private isNumero: string = VALIDATION_NUMBER;

  razas = [
    { "raza": "Affenpinscher" },
    { "raza": "Basenji" },
    { "raza": "Pinscher" },
    { "raza": "Pastor de Antolia" },
    { "raza": "Pastor Ganadero" },
    { "raza": "Silky Terrier" },
    { "raza": "Chihuahua" },
    { "raza": "Pinscher" },
    { "raza": "Chow Chow" },
    { "raza": "Afgano" },
    { "raza": "Bóxer" },
    { "raza": "King Charles Spaniel" },
    { "raza": "Sabueso Bávaro de Montaña" }
  ];
  origenes = [
    { "origen": "África" },
    { "origen": "Alemania" },
    { "origen": "Australia" },
    { "origen": "Afganistán" },
    { "origen": "Chihuahua" },
    { "origen": "Japonés" },
    { "origen": "Medio Oriente" },
    { "origen": "Mongolia" },
    { "origen": "Desconocida" },
  ]
  @Input() leyenda!: string;
  @Input() mascota!: IMascota;

  constructor(private mascotaService: GetpetsService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.formMascota = this.iniciarFormulario();
    // console.log(this.mascota)

  }

  ngOnInit(): void {
    if (this.mascota) {
      this.formMascota.reset({
        raza: this.mascota.raza,
        origen: this.mascota.origen,
        guardian: this.mascota.guardian,
        peso: this.mascota.peso,
        des: this.mascota.des,
        salud: this.mascota.salud,
        ejercicio: this.mascota.ejercicio,
        nutricion: this.mascota.nutricion
      })
      console.log(this.mascota)
    }
  }




  esCampoValido(campo: string) {
    const validarCampo = this.formMascota.get(campo);
    return !validarCampo?.valid && validarCampo?.touched
      ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';
  }

  registrando() {
    const mascota = this.formMascota.value;
    this.mascotaService.nuevaMascota(mascota).subscribe((resp: any) => {
      if (resp) {
        Swal.fire({
          position: 'center',
          title: 'Buen Trabajo!',
          text: 'Datos Guardados con exito',
          icon: 'info'
        });
        this.formMascota.reset();
      }
    }, (err: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Algo pasó hable con el administrador'
      });
    })
  }

  guardar() {
    if (this.formMascota.valid) {
      if (this.mascota != null) {
        this.editando();
      } else {
        this.registrando();
      }
    } else {
      Swal.fire({
        position: 'center',
        title: 'Faltan datos en el formulario',
        text: 'submit disparado, formulario no Valido',
        icon: 'warning'
      })
    }
  }

  private iniciarFormulario(): FormGroup {
    return this.fb.group({
      raza: ['', [Validators.required]],
      origen: ['', [Validators.required]],
      guardian: ['', [Validators.required]],
      peso: ['', [Validators.required]],
      des: ['', [Validators.required, Validators.minLength(5)]],
      salud: ['', [Validators.required, Validators.minLength(5)]],
      ejercicio: ['', [Validators.required, Validators.minLength(5)]],
      nutricion: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  editando() {
    this.mascota.raza = this.formMascota.controls['raza'].value;
    this.mascota.origen = this.formMascota.controls['origen'].value;
    this.mascota.guardian = this.formMascota.controls['guardian'].value;
    this.mascota.peso = this.formMascota.controls['peso'].value;
    this.mascota.des = this.formMascota.controls['des'].value;
    this.mascota.salud = this.formMascota.controls['salud'].value;
    this.mascota.ejercicio = this.formMascota.controls['ejercicio'].value;
    this.mascota.nutricion = this.formMascota.controls['nutricion'].value;


    this.mascotaService.ediatrMascota(this.mascota).subscribe((resp: any) => {
      if (resp) {
        Swal.fire({
          title: 'Buen Trabajo!',
          text: 'Datos Guardados con exito',
          icon: 'info'
        });
        this.formMascota.reset();
      }
    }, (err: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Algo pasó hable con el administrador'
      });
    })

  }


  mostrar() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }



}

