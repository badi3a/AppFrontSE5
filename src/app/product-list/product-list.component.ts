import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  title: string;
  listProduct: Product[] ;
  priceMax: number;
  show:boolean;
  constructor() {
  }

  ngOnInit(): void {
    this.title="MyApp Store";
    this.show = false;
    this.listProduct=[
      { id: 1,
        name: 'T-shirt 1',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias cupiditate deserunt dignissimos dolorem.',
        price: 150,
        nbrLike: 0,
        quantity: 10,
        picture: 'assets/image/t-shirt1.jpg'},
      { id: 2,
        name: 'T-shirt 2',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias cupiditate deserunt dignissimos dolorem.',
        price: 15,
        nbrLike: 0,
        quantity: 10,
        picture: 'assets/image/t-shirt1.jpg'},
      { id: 3,
        name: 'T-shirt 3',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias cupiditate deserunt dignissimos dolorem.',
        price: 65,
        nbrLike: 0,
        quantity: 0,
        picture: 'assets/image/t-shirt1.jpg'}
    ]
  }
  incrementLike(product: Product):void{
    console.log("hi")
    //use webServiceREST to persist data in the backEnd side
    //
    let i = this.listProduct.indexOf(product);
    if(i!=-1){
      this.listProduct[i].nbrLike++;
    }
  }
  showForm(): void{
    this.show = true;
  }
  saveProduct(p:Product){
    this.listProduct.push(p);
    this.show=false;
  }
}
