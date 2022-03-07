import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../core/model/product";
import {ProductService} from "../core/services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:Product;
  @Input() priceMax:number;
  @Output() likeNotification= new EventEmitter<Product>()
  @Output() deleteEvent = new EventEmitter<Product>()
  constructor(private prodService: ProductService) { }
  ngOnInit(): void {

  }
  incrementLikeNotification(product:Product){
    //notify the parent component
    this.likeNotification.emit(product)
  }
  delete(p:Product){
    this.deleteEvent.emit(p);

  }

}
