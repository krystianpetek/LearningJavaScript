import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductViewService } from './product-view.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit, OnDestroy {
  private _productViewService: ProductViewService;
  private _productSubscription = new Subject<void>();

  @Input() public id: number = -1;
  public name: string = '';

  public constructor(productViewService: ProductViewService) {
    this._productViewService = productViewService;
  }

  private getProduct(): void {
    this._productViewService
      .getProduct(this.id)
      .pipe(takeUntil(this._productSubscription))
      .subscribe((product) => {
        if (product) {
          this.name = product.name;
        }
      });
  }

  ngOnInit(): void {
    this.getProduct();
  }

  ngOnDestroy(): void {
    this._productSubscription.next();
    this._productSubscription.complete();
  }
}
