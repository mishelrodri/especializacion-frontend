import { Component, OnInit } from '@angular/core';
import { ImagenesService } from '../../services/imagenes.service';

@Component({
  selector: 'app-subir-imagenes',
  templateUrl: './subir-imagenes.component.html',
  styleUrls: ['./subir-imagenes.component.scss']
})
export class SubirImagenesComponent implements OnInit {

  file:File;
  myFiles:string[]=[];

  constructor(private uploadService: ImagenesService) { }

  ngOnInit(): void {
  }

  onFileSelected(event:Event){
    const target= event.target as HTMLInputElement;
    this.file=(target.files as FileList)[0];
  }

  subir(){
    this.uploadService.upload(this.file).subscribe((resp)=>{
      console.log('respuesta',resp);

    })
  }

  onFileChange(event:any){
    for (let i = 0; i < event.target.files.length; i++) {
      this.myFiles.push(event.target.files[i])
    }
  }

  multiple(){
    this.uploadService.multiple(this.myFiles).subscribe((resp)=>{
      console.log('resp mult', resp);

    })
  }


}
