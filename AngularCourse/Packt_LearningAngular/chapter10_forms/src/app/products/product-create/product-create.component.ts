import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent {
  private _productsService: ProductsService;
  @Output() added = new EventEmitter<Product>();
  public productForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    price: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
    }),
    info: new FormGroup({
      category: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
    }),
  });

  public constructor(productsService: ProductsService) {
    this._productsService = productsService;
  }

  createProduct(name: string, price: number): void {
    this._productsService.addProduct(name, price).subscribe((product) => {
      this.added.emit(product);
    });
  }

  get name(): FormControl<string> {
    return this.productForm.controls.name;
  }
  get price(): FormControl<number | undefined> {
    return this.productForm.controls.price;
  }
  createProductReactive(): void {
    this._productsService
      .addProduct(this.name.value, Number(this.price.value))
      .subscribe((product) => {
        this.productForm.reset();
        this.added.emit(product);
      });
  }
}
