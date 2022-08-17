import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, products } from './../../products';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {

  quantidade : number = 0;
  product: Product | any;

  products = products;
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  aumentarQuantidade(){
    this.quantidade++;
  }

  diminuirQuantidade(){
    this.quantidade--;
  }

  addToCart(product: Product, quantidade:number) {

   // product.quantidade = quantidade;
    this.cartService.addToCart(product, quantidade);
    console.log(product, quantidade);
   // window.alert('Your product has been added to the cart!');
   
  }

  addToCart2( quantidade:number) {

    //product.quantidade = quantidade;
    //this.cartService.addToCart(product, quantidade);
    console.log( quantidade);
   // window.alert('Your product has been added to the cart!');
   
  }
  
}
