import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss'],
})
export class ContenidoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const image = document.querySelector(
      '.section_main__img_container__img'
    ) as HTMLImageElement;

    let mediaQuery = window.matchMedia('(min-width:992px)');

    const changeImage = (media: any) => {
      if (media.matches) {
        image.src = '../../../assets/images/image-web-3-desktop.jpg';
      } else {
        image.src = '../../../assets/images/image-web-3-mobile.jpg';
      }
    };

    mediaQuery.addEventListener('change', changeImage);
    changeImage(mediaQuery);
  }
}
