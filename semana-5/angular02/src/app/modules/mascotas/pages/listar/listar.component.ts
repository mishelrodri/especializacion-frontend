import { Component, OnInit } from '@angular/core';
import { GetpetsService } from '../../services/getpets.service';
import { IMascota } from '../../interface/mascotas.interface';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  mascotas: IMascota[] = []; // array de mascotas
  parametrosBuscar: string = ''; //parametro de busqueda
  // !TODO: Nuevos parametros 🐱‍🏍 🐱‍👤 🐱‍💻
  mascotasP: any[] = [];
  datosM: string[] = [];
  datos: any[] = ['Usuarios', 30, true, "{'salario':300}"];

  constructor(
    private mascotaService: GetpetsService,
    private toastr: ToastrService
  ) {
    // console.log(mascotas.getMascotas());
    this.listar();
  }

  ngOnInit(): void {
    this.mascotaService.mascotas.subscribe((resp: any) => {
      this.mascotas = resp;
    });
    this.mostrar();
  }

  listar() {
    this.mascotaService.Allmascotas().then(async (res: IMascota[]) => {
      console.log(res);
      //TODO: repaso

      res.forEach((obj) => {
        this.mascotasP.push(obj);
        this.datosM.push(JSON.stringify(obj));
      });

      let jsonArray = JSON.parse(this.datosM[0]);
      for (const key in jsonArray) {
        console.log('KEYSS', key, jsonArray[key]);
      }

      const [obj1, ...args] = res;
      console.log('NO ENTENDER', obj1, args);
    });
  }

  buscar(): void {
    this.mascotaService
      .buscarMascota(this.parametrosBuscar)
      .subscribe((resp) => {
        this.mascotas = resp;
      });
  }

  // TODO: Nuevo metodo
  mostrar() {
    this.datos.forEach((obj) => {
      console.log('El forEach', obj);
    });

    console.log('******************');

    for (const key in this.datos) {
      console.log('Llaves', key);
    }

    for (const iterador of this.datos) {
      console.log(iterador);
    }
  }

  // TODO: Alerta
  eliminarMascota(pet: IMascota) {
    Swal.fire({
      title: '¿Estas seguro de eliminar?',
      text: `Esta seguro de borrar a ${pet.raza}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        // ! actualizar el array omitiendo la mascota eliminada
        this.mascotas = this.mascotas.filter(
          (objMascota: IMascota) => objMascota.id !== pet.id
        );

        // ! para quitar definitivo del json
        this.mascotaService.eliminarMascotaId(pet.id).subscribe(
          (resp: any) => {
            this.toastr.success(
              'El registro fue eliminado con éxito!',
              'Eliminado',
              { positionClass: 'toast-top-right' }
            );
          },
          (err: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.error.msg,
            });
          }
        );
      }
    });
  }
}
