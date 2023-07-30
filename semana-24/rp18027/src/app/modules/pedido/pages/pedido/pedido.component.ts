import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectConfig } from '@ng-select/ng-select';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  isEditar:boolean=false;
  formularioPedido!:FormGroup;

  constructor(private modalService: NgbModal,private config: NgSelectConfig, private fb:FormBuilder) {
    this.config.notFoundText = 'No se encontraron coincidencias';
  }

  iniciarFormulario(){
    return this.fb.group({
      fecha:['',[Validators.required]],
      estado:['',[Validators.required]],
      cliente:['',[Validators.required]],
    })
  }

  openModal(content:any,idPedido:number=0) {

    if(idPedido){
      this.isEditar=true;
    }else{
      this.isEditar=false;
    }

    this.modalService.open(content, { centered: true, size:'xl'});
  }

  close(){
    this.modalService.dismissAll();
  }

  guardar(){

  }

  // esCampoValido(){
  //   return this.formularioPedido
  // }

  eliminar(){
    Swal.fire({
      title: 'Estas seguro de eliminar este pedido?',
      text: "No puedes revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Borrado!',
          'Registro eliminado con exito.',
          'success'
        )
      }
    })
  }

  ngOnInit(): void {
  }



}
