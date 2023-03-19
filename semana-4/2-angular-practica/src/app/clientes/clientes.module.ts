import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [ClienteComponent, FormularioComponent, ListaComponent],
  imports: [CommonModule, FormsModule],
  exports: [ClienteComponent],
})
export class ClientesModule {}
