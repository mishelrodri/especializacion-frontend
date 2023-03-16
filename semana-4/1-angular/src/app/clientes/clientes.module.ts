import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [ClienteComponent, ListaComponent, FormularioComponent],
  imports: [CommonModule, FormsModule],
  exports: [ClienteComponent],
})
export class ClientesModule {}
