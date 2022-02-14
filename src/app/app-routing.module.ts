import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "./user-list/user-list.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {BestSellerComponent} from "./best-seller/best-seller.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {DetailUserComponent} from "./detail-user/detail-user.component";

const ROUTES: Routes =[
  {path:"", redirectTo:'product', pathMatch:"full"},
  {path:"user", component:UserListComponent},
  {path:"product", component: ProductListComponent},
  {path:"bestSeller", component: BestSellerComponent},
  {path:"user/:id", component:DetailUserComponent},
  {path:"**",component: NotFoundComponent},

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
