import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-practica';
  constructor(private metaService: Meta) {
    this.metaService.addTag({
      property: 'og:title',
      content: 'Angular Proyect',
    });
    this.metaService.addTag({
      property: 'og:description',
      content:
        'Discover The Most Awesome Things Here! Taylor Swift, mangas and anime ... This is a Wonderland!!',
    });
    this.metaService.addTag({
      property: 'og:image',
      content:
        'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    });
    this.metaService.addTag({
      property: 'og:url',
      content: 'https://github.com/mishelrodri',
    });
  }
}
