import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnChanges {
  private _productService: ProductsService;
  public authService: AuthService;
  @Input() public product: Product | undefined;
  @Output() public bought = new EventEmitter<Product>();
  @Output() public deleted = new EventEmitter<void>();
  @Input() public id = -1;
  public product$?: Observable<Product>;

  public constructor(
    productsService: ProductsService,
    authService: AuthService
  ) {
    this._productService = productsService;
    this.authService = authService;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.product$ = this._productService.getProduct(this.id);
  }

  public buy() {
    this.bought.emit(this.product);
  }

  public changePrice(product: Product, price: number): void {
    this._productService.updateProduct(product.id, price).subscribe(() => {
      alert(`The price of ${product.name} was changed!`);
    });
  }

  public removeProduct(product: Product) {
    this._productService.deleteProduct(product.id).subscribe(() => {
      this.deleted.emit();
    });
  }
}
