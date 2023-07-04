import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/account/models/usuario.model';

@Component({
  selector: 'app-perfil-card',
  templateUrl: './perfil-card.component.html',
  styleUrls: ['./perfil-card.component.scss']
})
export class PerfilCardComponent implements OnInit {
@Input('perfil')perfil:Usuario;


  constructor() { }

  ngOnInit(): void {
  }

}
