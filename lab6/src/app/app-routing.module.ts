import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponentComponent} from "./home-component/home-component.component";
import {AboutComponentComponent} from "./about-component/about-component.component";
import {AlbumDetailComponentComponent} from "./album-detail-component/album-detail-component.component";
import {AlbumsComponentComponent} from "./albums-component/albums-component.component";
import {AlbumPhotosComponentComponent} from "./album-photos-component/album-photos-component.component";


const routes: Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'about', component: AboutComponentComponent},
  {path: 'albums', component: AlbumsComponentComponent},
  {path: 'albums/:id', component: AlbumDetailComponentComponent},
  {path: 'albums/:id/photos', component: AlbumPhotosComponentComponent},
  {path: '', component: HomeComponentComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
