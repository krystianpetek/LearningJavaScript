import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { Product } from '../models/product';
import { Observable, filter, of, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { PriceComponent } from '../price/price.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnChanges, OnInit {
  private _productService: ProductsService;
  private _route: ActivatedRoute;
  private _authService: AuthService;
  private _cartService: CartService;
  private _dialog: MatDialog;

  @Input() public product?: Product;
  @Output() public deleted = new EventEmitter<void>();
  @Input() public id = -1;
  public product$?: Observable<Product>;
  public priceValue: number | undefined;

  public constructor(
    productsService: ProductsService,
    authService: AuthService,
    cartService: CartService,
    route: ActivatedRoute,
    dialog: MatDialog
  ) {
    this._productService = productsService;
    this._authService = authService;
    this._cartService = cartService;
    this._route = route;
    this._dialog = dialog;
  }

  public ngOnInit(): void {
    // after redirect
    const id: number = this._route.snapshot.params['id'] as number;
    this.product$ = this._productService.getProduct(id);

    // prevent flickering after navigate for /products-redirect/:id
    this.product$ = this._route.data.pipe(
      switchMap((data) => of(data['product']))
    );

    // observable to change view
    this.product$ = this._route.paramMap.pipe(
      switchMap((params) => {
        return this._productService.getProduct(Number(params.get('id')));
      })
    );

    // filtering data
    this._route.queryParamMap.subscribe((parameters) => {
      console.log(parameters.get('sortOrder'));
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.product$ = this._productService.getProduct(this.id);
  }

  public buy(product: Product) {
    this._cartService.addProduct(product);
  }

  public changePrice(product: Product, price: number): void {
    this._dialog
      .open(PriceComponent, {
        data: product.price,
      })
      .afterClosed()
      .pipe(
        filter((price: number) => !!price),
        switchMap((price: number) =>
          this._productService.updateProduct(product.id, price)
        )
      )
      .subscribe(() => {
        alert(`The price of ${product.name} was changed!`);
      });
  }

  public removeProduct(product: Product) {
    this._productService.deleteProduct(product.id).subscribe(() => {
      this.deleted.emit();
    });
  }

  public get isLoggedUser(): boolean {
    return this._authService.isLoggedIn;
  }
}
