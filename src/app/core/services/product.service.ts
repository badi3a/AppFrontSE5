import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url= environment.url;
  constructor(private http: HttpClient) {
  }
  //get Products
  getProducts(){
    return this.http.get<Product[]>(this.url);}
  //add Product
  addProdudct(product: Product){
    return this.http.post(this.url, product)}
  //delete Product
  deleteProduct(id:number){
    return this.http.delete(this.url+id)}
  //update Product
  updateProduct(product:Product){
    return this.http.put(this.url+product.id, product)
  }
}
