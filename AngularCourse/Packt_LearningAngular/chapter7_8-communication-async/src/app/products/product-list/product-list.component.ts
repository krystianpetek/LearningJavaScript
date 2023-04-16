import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { ProductViewService } from '../product-view/product-view.service';
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
export class ProductListComponent implements OnInit {
  private readonly _productService: ProductsService;
  public title: string = 'product-list';

  public products: Product[] = [];

  public constructor(productService: ProductsService) {
    this._productService = productService;
  }

  private getProducts(): void {
    this._productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
