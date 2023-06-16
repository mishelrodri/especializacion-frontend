import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ListarComponent } from 'src/app/modules/anime/pages/listar/listar.component';

@Injectable({
  providedIn: 'root'
})
export class SalirAGuard implements CanDeactivate<ListarComponent> {
  canDeactivate(
    component: ListarComponent): boolean {
    return component.canExit();
  }



}
