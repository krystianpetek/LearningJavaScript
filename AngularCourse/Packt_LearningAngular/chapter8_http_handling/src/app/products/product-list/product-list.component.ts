import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../products.service';
import { Subscription, Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  private readonly _productService: ProductsService;
  private _productSubscription?: Subscription;
  public products$?: Observable<Product[]>;

  public selectedProduct: Product | undefined;

  public constructor(productService: ProductsService) {
    this._productService = productService;
  }

  private getProducts(): void {
    this.products$ = this._productService.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    this._productSubscription?.unsubscribe();
  }
}
