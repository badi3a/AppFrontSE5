import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "./user-list/user-list.component";
import {ProductListComponent} from "./product-list/product-list.component";

const ROUTES: Routes =[
  {path:"user", component:UserListComponent},
  {path:"product", component: ProductListComponent}
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
