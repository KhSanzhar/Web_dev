import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
