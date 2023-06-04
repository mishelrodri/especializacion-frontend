import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Photos } from '../../interface/Photos';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pothos: Photos[] = [];
  page = 1;
  loading: boolean = false;

  constructor(private photoService: PhotosService) { }
  ngOnInit(): void {
    this.getPhotos();
  }

  onScroll() {
    console.log('scroll infinito')
    this.page += 1;
    this.loading = true;
    setTimeout(() => {
      this.getPhotos();
      this.loading = false;
    }, 4000);

  }

  getPhotos() {
    this.photoService.getPhotos(this.page).subscribe((resp: any) => {
      console.log(resp)
      this.pothos = [...this.pothos, ...resp]
    })
  }

}
