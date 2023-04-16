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

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnChanges {
  private _productService: ProductsService;
  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter<Product>();
  @Input() id = -1;
  product$?: Observable<Product>;

  public constructor(productsService: ProductsService) {
    this._productService = productsService;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.product$ = this._productService.getProduct(this.id);
  }

  buy() {
    this.bought.emit(this.product);
  }
}
