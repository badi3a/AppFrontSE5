import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/product";
import {ProductService} from "../core/services/product.service";

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {
  list: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.list= this.productService.list;
  }

}
