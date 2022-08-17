import { Component, OnInit } from '@angular/core';
import { Product, products } from './../../products';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
