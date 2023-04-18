import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private readonly _productService: ProductsService;
  public products?: Product[] = [];
  // public products$?: Observable<Product[]>;

  public selectedProduct: Product | undefined;

  public constructor(productService: ProductsService) {
    this._productService = productService;
  }

  private getProducts(): void {
    this._productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  // private getProducts(): void {
  //   this.products$ = this._productService.getProducts();
  // }

  public ngOnInit(): void {
    this.getProducts();
  }

  public onBuy(product: Product) {
    window.alert(`You bought: ${product.name}`);
  }

  public onAdd(product: Product) {
    this.products?.push(product);
  }

  public onDelete() {
    this.products = this.products?.filter(
      (product) => product.id != this.selectedProduct?.id
    );
    this.selectedProduct = undefined;
  }
}
