import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { MainModule } from './main/main.module';
import { NewsModule } from './news/news.module';
import { RelevantNewsModule } from './relevant-news/relevant-news.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NavbarModule,
    MainModule,
    NewsModule,
    RelevantNewsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
