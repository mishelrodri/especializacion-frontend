import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'ngModel',
        loadChildren: () =>
          import('src/app/modules/ng-model/ng-model.module').then(
            (m) => m.NgModelModule
          ),
      },
      {
        path: 'mangas',
        loadChildren: () =>
          import('src/app/modules/manga/manga.module').then(
            (m) => m.MangaModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
