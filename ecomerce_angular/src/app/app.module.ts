import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WomenComponent } from './women/women.component';
import { MensComponent } from './mens/mens.component';
import { ColletctionsComponent } from './colletctions/colletctions.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContainerComponent } from './container/container.component';


import { CartComponent } from './cart/cart.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { ThumbnailProductsComponent } from './thumbnail-products/thumbnail-products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ContainerComponent,
    ColletctionsComponent,
    MensComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    AddCartComponent,
    ThumbnailProductsComponent,
    ProductsDetailsComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ColletctionsComponent },
      { path: 'collections', component: ColletctionsComponent },
      { path: 'mens', component: MensComponent },
      { path: 'women', component: WomenComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'cart', component: CartComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
