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
        path: 'nasa',
        loadChildren: () =>
          import('src/app/modules/nasa/nasa.module').then((m) => m.NasaModule),
      },
      {
        path: 'directivas',
        loadChildren: () =>
          import('src/app/modules/directivas/directivas.module').then(
            (m) => m.DirectivasModule
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
