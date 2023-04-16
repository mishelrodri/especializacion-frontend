import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeMainComponent } from './pages/animeMain/animeMain.component';

const routes: Routes = [
  {
    path: '',
    component: AnimeMainComponent,
    title: 'Anime Quotes',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeRoutingModule {}
