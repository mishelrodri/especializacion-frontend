import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/account/models/usuario.model';
import { UsuarioService } from 'src/app/account/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {


  public perfil:Usuario;
  public imgTemp:string | ArrayBuffer =null;
  public imagenSubir!:File;
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  // this.imgTemp=this.perfil.imagenUrl;
  this.perfil= this.usuarioService.usuario;
    }

  preVisualizarImagen(event:any){
    this.imagenSubir= event.target.files[0];

    if(this.imagenSubir){
      this.imgTemp=null;
    }

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend=()=>{
      this.imgTemp= reader.result;
    }

  }

  subirImagen(){
    this.usuarioService.actualizarFoto(this.imagenSubir,'usuarios', this.perfil.uid || '')
    .then((img:string)=>{
      this.perfil.img=img;
    }).catch(err=>{
      Swal.fire({
        icon:'error',
        title:'Error',
        text:'No se pudo subir'
      })
    })
  }

}
