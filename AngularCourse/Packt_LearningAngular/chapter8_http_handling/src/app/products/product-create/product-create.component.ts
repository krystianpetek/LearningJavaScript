import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent {
  private _productsService: ProductsService;
  @Output() added = new EventEmitter<Product>();
  public constructor(productsService: ProductsService) {
    this._productsService = productsService;
  }

  createProduct(name: string, price: number): void {
    this._productsService.addProduct(name, price).subscribe((product) => {
      this.added.emit(product);
    });
  }
}
