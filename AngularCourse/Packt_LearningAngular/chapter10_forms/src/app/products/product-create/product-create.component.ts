import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../models/product';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent {
  private _productsService: ProductsService;
  private _formBuilder: FormBuilder;

  @Output() public added = new EventEmitter<Product>();

  public productForm = new FormGroup<{
    name: FormControl<string>;
    price: FormControl<number | undefined>;
    info: FormGroup<{
      category: FormControl<string>;
      description: FormControl<string>;
      image: FormControl<string>;
    }>;
  }>({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    price: new FormControl<number | undefined>(undefined, {
      validators: [Validators.required, Validators.min(2)],
      nonNullable: true,
    }),
    info: new FormGroup<{
      category: FormControl<string>;
      description: FormControl<string>;
      image: FormControl<string>;
    }>({
      category: new FormControl<string>('', { nonNullable: true }),
      description: new FormControl<string>('', { nonNullable: true }),
      image: new FormControl<string>('', { nonNullable: true }),
    }),
  });

  private buildForm() {
    this.productForm = this._formBuilder.nonNullable.group({
      name: this._formBuilder.nonNullable.control<string>(''),
      price: this._formBuilder.nonNullable.control<number | undefined>(
        undefined,
        {}
      ),
      info: this._formBuilder.nonNullable.group<{
        category: FormControl<string>;
        description: FormControl<string>;
        image: FormControl<string>;
      }>({
        category: this._formBuilder.nonNullable.control<string>(''),
        description: this._formBuilder.nonNullable.control<string>(''),
        image: this._formBuilder.nonNullable.control<string>(''),
      }),
    });
  }

  public constructor(
    productsService: ProductsService,
    formBuilder: FormBuilder
  ) {
    this._productsService = productsService;
    this._formBuilder = formBuilder;
  }

  public createProduct(name: string, price: number): void {
    this._productsService.addProduct(name, price).subscribe((product) => {
      this.added.emit(product);
    });
  }

  public get nameForm(): FormControl<string> {
    return this.productForm.controls.name;
  }
  public get priceForm(): FormControl<number | undefined> {
    return this.productForm.controls.price;
  }

  public createProductReactive(): void {
    this._productsService
      .addProduct(this.nameForm.value, Number(this.priceForm.value))
      .subscribe((product) => {
        this.productForm.reset();
        this.added.emit(product);
      });
  }
}
