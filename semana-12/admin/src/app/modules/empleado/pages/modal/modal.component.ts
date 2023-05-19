import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VALIDATION_STRING } from '../../constants/validations';
import { IEmpleado } from '../../interface/IEmpleado';
import { EmpleadoService } from '../../service/empleado.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  @Input() empleado!: IEmpleado;
  @Input() leyenda!: string;


  formularioGeneral: FormGroup;

  //TODO: VALIDACIONES
  private isString: string = VALIDATION_STRING;

  constructor(private modalService: NgbModal, private fb: FormBuilder, private empleadoService: EmpleadoService) {
    this.formularioGeneral = this.iniciarFormulario();
  }

  ngOnInit(): void {
    if (this.empleado) {
      this.formularioGeneral.patchValue(this.empleado);
    }
  }

  private iniciarFormulario() {
    return this.fb.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.pattern(this.isString)]],
      apellido: ['', [Validators.required, Validators.pattern(this.isString)]],
      puntaje: ['', [Validators.required]]
    })
  }

  guardar() {

    if (this.formularioGeneral.valid) {


      if (this.empleado?.id) { //editamos

        const empleado = this.formularioGeneral.value;
        this.empleadoService.updateEmpleado(empleado).subscribe((resp: any) => {
          console.log('EMPLEADO EDITADO')
          this.empleadoService.getEmpleados();
          this.formularioGeneral.reset();
        })

      } else {//guardamos
        const empleado = this.formularioGeneral.value;
        this.empleadoService.saveEmpleado(empleado).subscribe((resp: any) => {
          console.log('EMPLEADO AGREGADO')
          this.empleadoService.getEmpleados();
          this.formularioGeneral.reset();
        })
      }

      this.modalService.dismissAll();

    }

    if (this.formularioGeneral.valid) { //agregamos

    }




    return Object.values(this.formularioGeneral.controls).forEach((control) => control.markAsTouched())
  }

  esCampoValido(campo: string) {

    const validarCampo = this.formularioGeneral.get(campo);
    return !validarCampo?.valid && validarCampo?.touched ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';

  }

  /**
* Open modal
* @param content modal content
*/
  openModal(content: any, empleado: IEmpleado) {
    this.empleado = empleado;
    this.modalService.open(content, { centered: true });
  }

}
