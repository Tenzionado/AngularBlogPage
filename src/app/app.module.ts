import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    TopNavComponent,
    BlogComponent,
    HomeComponent,
    HeroImageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
