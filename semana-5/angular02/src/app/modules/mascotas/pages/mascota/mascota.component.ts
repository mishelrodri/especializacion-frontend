import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import { IMascota } from '../../interface/mascotas.interface';
import { GetpetsService } from '../../services/getpets.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss'],
})
export class MascotaComponent implements OnInit {
  mascota!: IMascota;

  constructor(
    private activateRoute: ActivatedRoute,
    private mascotaSer: GetpetsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // como devuelve un observable
    // witchMap, operador de transformacion
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.mascotaSer.buscarMascotaId(id)))
      .subscribe((resp: IMascota) => {
        this.mascota = resp;
      });
  }

  regresar() {
    // para ir a la ruta indicada
    this.router.navigate(['mascotas/listar']);
  }

  eliminar() {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.mascotaSer.eliminarMascotaId(id)))
      .subscribe((resp: IMascota) => {
        this.mascota = resp;
      });

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Has eliminado a un canino 🥺😭',
    });

    this.regresar();
  }
}
