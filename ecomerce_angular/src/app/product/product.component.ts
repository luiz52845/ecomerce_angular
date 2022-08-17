import { CartService } from '../cart.service';
import { Product, products } from './../../products';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product | undefined;

  products = products;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  


}
