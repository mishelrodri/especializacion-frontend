import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubirArchivosRoutingModule } from './subir-archivos-routing.module';
import { SubirImagenesComponent } from './components/subir-imagenes/subir-imagenes.component';
import { DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface={
  url:'http://localhost:8080/file/upload',
  acceptedFiles:'image/*',//si quieres que acepte de todo tipo de archivos UITA ESTA OPCCION
  createImageThumbnails:true
}

@NgModule({
  declarations: [
    SubirImagenesComponent
  ],
  imports: [
    CommonModule,
    SubirArchivosRoutingModule,
    DropzoneModule,
  ],
  providers:[
    {
      provide:DROPZONE_CONFIG,
      useValue:DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class SubirArchivosModule { }
