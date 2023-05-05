import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { API_PETS } from './constants/routes/routes';
import { FormularioComponent } from '@shared/formulario/formulario.component';

const routes: Routes = [
  // Entre llaves definiremos cada una de las rutas de la app
  {
    path: ``,
    component: SkeletonComponent,
    // Aarrray de rutas hijas
    children: [
      // IMplemeentando carga peresoza  al implementar loadChildren
      {
        path: '',
        loadChildren: () =>
          import('@modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'directivas',
        // QUEREMOS QUE ABRA LOS HIJOS
        loadChildren: () =>
          import('@modules/directivas/directivas.module').then(
            (m) => m.DirectivasModule
          ),
      },
      {
        path: API_PETS,
        // QUEREMOS QUE ABRA LOS HIJOS
        loadChildren: () =>
          import('@modules/mascotas/mascotas.module').then(
            (m) => m.MascotasModule
          ),
      },
      {
        path: 'anime',
        loadChildren: () => import('src/app/modules/anime/anime.module').then(m => m.AnimeModule)
      },
      {
        path: 'formularios',
        component: FormularioComponent,
        title: 'Formularios',
      },
    ],
  },
  {
    path: 'notfound',
    component: NotfoundComponent,
  },

  // cualquier cosa que venga en path redireccione al path=''
  { path: '**', redirectTo: 'notfound', pathMatch: 'full' },
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule { }
