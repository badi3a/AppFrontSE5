import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../core/model/product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product;
  @Output() eventAddProduct = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
    this.product = new Product()
  }
  save(){
    this.product.nbrLike=0;
    this.eventAddProduct.emit(this.product);
  }

}
