import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { AlbumsComponentComponent } from './albums-component/albums-component.component';
import { AlbumDetailComponentComponent } from './album-detail-component/album-detail-component.component';
import { AlbumPhotosComponentComponent } from './album-photos-component/album-photos-component.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipe, Ng2SearchPipeModule} from "ng2-search-filter";
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    AlbumsComponentComponent,
    AlbumDetailComponentComponent,
    AlbumPhotosComponentComponent,
    HeaderComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
