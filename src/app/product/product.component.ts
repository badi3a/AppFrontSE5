import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:Product;
  constructor() { }

  ngOnInit(): void {
  }
  incrementLike(product:Product){

  }

}
