import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../products/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  private _cartService: CartService;
  protected cartForm: FormGroup<{
    products: FormArray<FormControl<number>>;
  }> = new FormGroup<{ products: FormArray<FormControl<number>> }>({
    products: new FormArray<FormControl<number>>([]),
  });

  protected cart: Product[] = [];

  public constructor(cartService: CartService) {
    this._cartService = cartService;
  }
  ngOnInit(): void {
    this.cart = this._cartService.cart;
    this.cart.forEach(() => {
      this.cartForm.controls.products.push(
        new FormControl<number>(1, { nonNullable: true })
      );
    });
  }
}
