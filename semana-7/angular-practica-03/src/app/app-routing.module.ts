import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { NotFoundComponent } from './components/notFound/notFound.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    title: 'Skeleton',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'movies',
        loadChildren: () =>
          import('src/app/modules/movies/movies.module').then(
            (m) => m.MoviesModule
          ),
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
