import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { ProductViewService } from '../product-view/product-view.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [
    {
      provide: ProductViewService,
      useClass: ProductViewService,
    },
  ],
})
export class ProductListComponent implements OnInit, OnDestroy {
  private readonly _productService: ProductsService;
  private _productSubscription?: Subscription | undefined;
  public products: Product[] = [];

  public constructor(productService: ProductsService) {
    this._productService = productService;
  }

  private getProducts(): void {
    this._productSubscription = this._productService
      .getProducts()
      .subscribe((products) => {
        this.products = products;
      });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    this._productSubscription?.unsubscribe();
  }
}
