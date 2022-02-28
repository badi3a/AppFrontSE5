import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   list: Product[]= [
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
       picture: 'assets/image/t-shirt1.jpg'}];
  constructor() { }
}
