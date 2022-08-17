import { Product } from './../products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items: Product[]=[];

  addToCart(product : Product, quantidade: number){
    return this.items.push(product)
  }

  removeToCart(product : Product){
    return this.items.push(product)
  }
}
