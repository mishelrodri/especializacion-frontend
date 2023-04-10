import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    // title: 'Skeleton',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'mangas',
        loadChildren: () =>
          import('src/app/modules/api-mangas/api-mangas.module').then(
            (m) => m.ApiMangasModule
          ),
      },
      {
        path: 'taylor',
        loadChildren: () =>
          import('src/app/modules/taylor/taylor.module').then(
            (m) => m.TaylorModule
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
