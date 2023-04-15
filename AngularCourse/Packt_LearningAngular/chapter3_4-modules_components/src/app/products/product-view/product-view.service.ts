import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProductViewService {
  private _productService: ProductsService;
  private product: Product | undefined;

  constructor(productService: ProductsService) {
    this._productService = productService;
  }

  getProduct(id: number): Product | undefined {
    const product = this._productService.getProducts();
    if (!this.product) {
      this.product = product[id];
    }
    return this.product;
  }
}
