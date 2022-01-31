import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  title: string;
  listProduct: Product[];
  constructor() {
  }

  ngOnInit(): void {
    this.title="MyApp Store";
    this.listProduct=[
      { id: 1,
        name: 'T-shirt 1',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias cupiditate deserunt dignissimos dolorem.',
        price: 15,
        nbrLike: 0,
        quantity: 10,
        picture: 'assets/t-shirt2.jpeg'},

      { id: 2,
        name: 'T-shirt 2',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias cupiditate deserunt dignissimos dolorem.',
        price: 15,
        nbrLike: 0,
        quantity: 10,
        picture: 'assets/t-shirt1.jpeg'},
      { id: 3,
        name: 'T-shirt 3',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias cupiditate deserunt dignissimos dolorem.',
        price: 15,
        nbrLike: 0,
        quantity: 0,
        picture: 'assets/t-shirt2.jpeg'}
    ]
  }

}
