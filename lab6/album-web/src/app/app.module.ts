import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { AlbumsComponentComponent } from './albums-component/albums-component.component';
import { AlbumDetailComponentComponent } from './album-detail-component/album-detail-component.component';
import { AlbumPhotosComponentComponent } from './album-photos-component/album-photos-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    AlbumsComponentComponent,
    AlbumDetailComponentComponent,
    AlbumPhotosComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
