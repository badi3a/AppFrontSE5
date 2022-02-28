import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    FooterComponent,
    UserListComponent,
    BestSellerComponent,
    ProductComponent,
    NotFoundComponent,
    DetailUserComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
