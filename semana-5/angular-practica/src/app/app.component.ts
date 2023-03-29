import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-practica';
  mangasList: any = {};
  constructor(private apiservice: ApiService) {
    console.log('El Componentese ha creado');
  }

  ngOnInit(): void {
    console.log('El componente se ha inicializado');
    this.apiservice
      .getMangas()
      .subscribe((response: any) => (this.mangasList = response.data));
    // .subscribe((response: any) => console.log(response.data));
  }
}
