import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Observable, mergeMap, of, switchMap } from 'rxjs';

@Injectable()
export class ProductViewService {
  private _productService: ProductsService;
  private _product: Product | undefined;

  constructor(productService: ProductsService) {
    this._productService = productService;
  }

  getProduct(id: number): Observable<Product> {
    const product: Observable<Product> = this._productService
      .getProducts()
      .pipe(
        mergeMap((products) => {
          // if (!this._product) {
          this._product = products[id];
          // }
          return of(this._product);
        })
      );
    return product;
  }
}
