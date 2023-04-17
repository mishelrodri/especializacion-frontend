import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing.module';
import { NasaComponent } from './pages/nasa/nasa.component';
import { CardNasaComponent } from './components/cardNasa/cardNasa.component';

@NgModule({
  declarations: [NasaComponent, CardNasaComponent],
  imports: [CommonModule, NasaRoutingModule],
})
export class NasaModule {}
