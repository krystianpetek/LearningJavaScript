import { Injectable } from '@angular/core';
import { Product } from '../products/models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart: Product[] = [];
  constructor() {}

  public addProduct(product: Product): void {
    this.cart.push(product);
  }
}
